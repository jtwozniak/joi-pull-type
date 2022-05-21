/** @format */

import * as Joi from 'joi';
import '../../index';

const schema = Joi.number().valid(2, 3, 4, 8);
type Type = Joi.pullType<typeof schema>;

let v: Type = 2;
v = 3;
v = 4;
v = 8;
v = undefined;

// @ts-expect-error
v = 10;

// @ts-expect-error
v = '10';

const schema2 = Joi.valid(2, '3');
type Type2 = Joi.pullType<typeof schema2>;

let v2: Type2 = 2;
v2 = '3';

// @ts-expect-error
v2 = 4;
// @ts-expect-error
v2 = 8;
// @ts-expect-error
v2 = undefined;
