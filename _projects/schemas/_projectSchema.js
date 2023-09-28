module.exports = {
    $id: "https://swizz6ix.com/schemas/_project.json",
    type: "object",
    properties: {
        progress: {
        type: "string",
        },
        projectCode: {
        type: "number",
        },
        projectName: {
        type: "string",
        },
        startedOn: {
        type: "string",
        },
        deadline: {
        type: "string",
        },
    },
    required: ["progress", "projectCode", "projectName", "startedOn", "deadline"],
    additionalProperties: false,
};
