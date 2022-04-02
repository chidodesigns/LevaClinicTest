const bcrypt = require("bcryptjs")

export const GenerateSalt = async () => {

    return await bcrypt.genSaltSync();

}

export const GeneratePassword = async(password: string, salt: string) => {
    return await bcrypt.hashSync(password, salt)
}



