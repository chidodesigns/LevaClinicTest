import {createContext, useState} from 'react'

const UserContext = createContext({
    errorMsg: '',
    successMsg: '',
    registerMedicalInformationHandler: (userMedicalInfoDto) => {}
})

export function UserContextProvider(props) {

    const [errorMsg, setErrorMsg] = useState()
    const [successMsg, setSuccessMsg] = useState()

    function registerMedicalInformationHandler (userMedicalInfoDto) {
        fetch ('http://127.0.0.1:8000/api/customer/medical-history', {
            method: "POST",
            body: JSON.stringify(userMedicalInfoDto),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => {
            console.log(response)
            setSuccessMsg(response)
        })
        .catch((response) => {
            response.json().then((data) => {
                setErrorMsg(data)
            })
        })
    }

    const context = {
        errorMsg: errorMsg,
        successMsg: successMsg,
        userRegisterMedicalInfo: registerMedicalInformationHandler
    }

    return (
        <UserContext.Provider value={context}>
            {props.children}
        </UserContext.Provider>
    )

}

export default UserContext