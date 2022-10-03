import {Contractor} from "../../App";
import {validatenip} from "./validateNip";
import {validatepesel} from "./validatePesel";

export function validationContractor(data:Contractor,isCompany:boolean ):boolean {
    const {name,lastName,id} = data;
    const errorsInit ={
        name:false,
        lastName:false,
        id:false,
        confirm:false,
    }
    if(name.length > 2){
        errorsInit.name = true;
    }
    if (lastName.length > 2){
        errorsInit.lastName = true;
    }
    if(isCompany){
       errorsInit.id = validatenip(id)
    }else{
        errorsInit.id = validatepesel(id)
    }
    if(errorsInit.name && errorsInit.lastName && errorsInit.id){
        errorsInit.confirm = true;
    }
    return errorsInit.confirm
}