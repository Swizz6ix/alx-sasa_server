const Ajv = require("ajv").default,
    AJV_OPTS = {
        allErrors: true
    };

module.exports = {
    /**
     * @description Compiles the schema provided in argument and validates for
     *  the complied schema, and return errors if any.
     * 
     * @param {object} schema = AJV Schema to validates against
     * @param {object=} _schema = Ajv added schema
     * 
     * @returns {function} - Express request handler
     */

    verify: (schema, _schema) => {
        if (!schema) {
            throw new Error("Schema not provided");
        }

        return (req, res, next) => {
            const { body } = req;
            const ajv = new Ajv(AJV_OPTS);

            if (_schema)
            {
                const _validate = ajv.addSchema(_schema).compile(schema)
                isValid = _validate(body)
            }
            
            const validate = ajv.compile(schema);
            isValid = validate(body);

            if (isValid) {
                return next();
            }

            return res.send({
                status: false,
                error: {
                    message: `Invalid Payload: ${ajv.errorsText(validate.errors)}`
                }
            });
        }
    }
};