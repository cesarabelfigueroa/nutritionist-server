/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let _ = require('lodash');

let usersModel = sails.models.users;

let _delete = async function(parameters) {
	let where = {};
	if (_.has(parameters, 'name')) {
		where.name = parameters.name;
	}

	let users = await usersModel.destroy({
		where: where
	});
	return users;
};

let _update = async function(parameters) {
	let where = {};
	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
		delete parameters.id;
	}

	let users = await usersModel.update({ ...parameters
	}, {
		where: where
	});
	return users;
};


let _list = async function(parameters) {
	let where = {};
	if (_.has(parameters, 'name')) {
		where.name = parameters.name;
	}


	let users = await usersModel.findAll({
		where: where,
		include: [{
			model: sails.models.roles,
			as: 'roles'
		}]
	});
	return users;
};


let _create = async function(parameters) {
	let name = parameters.name;
	let password = parameters.password;
	let lastname = parameters.lastname;
	let username = parameters.username;
	let user = await usersModel.create({
		name,
		password,
		lastname,
		username
	});

	return user;
};

module.exports = {
	list: async function(request, response) {
		let users = await _list(request.query);
		response.json(users);
	},
	create: function(request, response) {
		let user = _create(request.body);
		response.json({
			created: true
		});
	},
	delete: async function(request, response) {
		let users = await _delete(request.body);
		response.json(users);
	},
	update: async function(request, response) {
		let user = _update(request.body);
		response.json({
			updated: true
		});
	},
	_create: _create,
	_list: _list,
	_delete: _delete,
	_update: _update
};