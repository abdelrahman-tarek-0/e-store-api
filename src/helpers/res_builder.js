function resBuilder(message,status=200) {
    return {
        status,
        message
    }
}

module.exports = {resBuilder}