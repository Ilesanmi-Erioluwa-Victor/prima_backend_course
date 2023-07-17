"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getJwtToken_1 = require("../helpers/getJwtToken");
const cookieToken = (user, res) => {
    const token = (0, getJwtToken_1.getJwtToken)(user.id);
};
