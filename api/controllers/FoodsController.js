/**
 * FoodsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let _ = require('lodash');

let usersModel = sails.models.foods;

let _list = async function(parameters) {
	let where = {};
	if (_.has(parameters, 'name')) {
		where.name = parameters.name;
	}

	if (_.has(parameters, 'id')) {
		where.id = parameters.id;
	}

	if (_.has(parameters, 'image')) {
		where.image = parameters.image;
	}

	if (_.has(parameters, 'description')) {
		where.description = parameters.description;
	}

	return foods;
};


let _create = async function(parameters) {
	let name = parameters.name;
	let image = parameters.image;
	let description = parameters.description;
	let food = await usersModel.create({
		name,
		image,
		description
	});

	food = await _list({
		name,
		image,
		description
	});

	return food[0];
};

module.exports = {
	list: async function(request, response) {
		let foods = await _list(request.query);
		response.json(foods);
	},
	create: function(request, response) {
		let food = _create(request.body);
		response.json({
			created: true
		});
	},
	_create: _create,
	_list: _list
};
