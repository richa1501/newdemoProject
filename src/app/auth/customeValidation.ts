import { AbstractControl } from '@angular/forms';

 /**
  *  Email validation function
  */
export function emailValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
     const regex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');
     if (!regex.test(control.value)){
      return {
          isError:true

      };
     }
    }
    return null ;
  }


 /**
  *  Password validation function
  */
export function passwordValidator(control: AbstractControl) {
  if (control && (control.value !== null || control.value !== undefined)) {
   const regex = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!#%*?&])[A-Za-zd$@$!%*?&].{7}');
   if (!regex.test(control.value)){
    return {
        isError:true

    };
   }
  }
  return null ;
}


 /**
  *  Matchpassword validation function
  */
export function mustMatch(control: AbstractControl){
    if (control && (control.value !== null || control.value !== undefined)){
        const cpassword = control.value;
        const passwordcontrol = control.root.get('password');
        if(passwordcontrol){
            const passValue = passwordcontrol.value;
            if(passValue !== cpassword){
                return {
                    isError:true
                }
            }
        }
    }
    return null;
}

