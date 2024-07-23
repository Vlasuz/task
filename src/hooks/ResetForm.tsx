import { Dispatch, SetStateAction } from "react"

interface ResetFormProps {
    stateFunctions: Dispatch<SetStateAction<string>>[]
}

export const useResetForm = ({stateFunctions}: ResetFormProps) => {

    stateFunctions.map(setState => setState(''))

}