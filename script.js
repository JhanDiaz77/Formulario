function qs(element) {
    return document.querySelector(element)
}


window.addEventListener("load", ()=>{
    let $inputName = qs('#name'),
    $nameErrors = qs('#nameErrors'),
    $inputLastname = qs('#lastname'),
    $lastnameErrors = qs('#lastnameErrors'),
    $form = qs('#form'),
    $dni = qs('#dni'),
    $dniErrors = qs('#dniErrors'),
    $email = qs('#email'),
    $emailErrors = qs('#emailErrors'),
    $pass = qs('#pass'),
    $passErrors = qs('#passErrors'),
    $pass2 = qs('#pass2'),
    $pass2Errors = qs('#pass2Errors'),
    $fecha = qs('#fecha'),
    $fechaErrors = qs('#dateErrors'),
    $sexo = qs('#sexo'),
    $sexErrors = qs('#sexErrors'),
    $terms = qs('#flexCheckDefault'),
    $termsErrors = qs('#termsErrors'),



    $file = qs('#formFile'),
    $fileErrors = qs('#fileErrors'),
    $imgPreview = qs('#img-preview'),
    

    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExDNI = /^[0-9]{7,8}$/,
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

    $inputName.addEventListener("blur", ()=>{

        switch(true) {/* se va a evaluar que no use numeros y otra cosa */
            case !$inputName.value.trim():  /* que no se coloquen espacios */
                $nameErrors.innerHTML = "El nombre es requerido";
                $inputName.classList.add("is-invalid");
                break;
            case !regExAlpha.test($inputName.value):
                $nameErrors.innerHTML = "El nombre es invalido";
                $inputName.classList.add("is-invalid");
                break;
            default:
                $inputName.classList.remove("is-invalid");
                $inputName.classList.add("is-valid")
                $nameErrors.innerHTML = "";
                break
        }
    })


    $inputLastname.addEventListener("blur", ()=>{

        switch(true) {/* se va a evaluar que no use numeros y otra cosa */
            case !$inputLastname.value.trim():  /* que no se coloquen espacios */
                $lastnameErrors.innerHTML = "El apellido es requerido";
                $inputLastname.classList.add("is-invalid");
                break;
            case !regExAlpha.test($inputLastname.value):
                $lastnameErrors.innerHTML = "El apellido invalido";
                $inputLastname.classList.add("is-invalid");
                break;
            default:
                $inputLastname.classList.remove("is-invalid");
                $inputLastname.classList.add("is-valid")
                $lastnameErrors.innerHTML = "";
                break
        }
    })

    $dni.addEventListener("blur", ()=>{

        switch(true) {/* se va a evaluar que no use numeros y otra cosa */
            case !$dni.value.trim():  /* que no se coloquen espacios */
                $dniErrors.innerHTML = "Su Dni es requerido";
                $dni.classList.add("is-invalid");
                break;
            case !regExDNI.test($dni.value):
                $dniErrors.innerHTML = "el DNI es invalido";
                $dni.classList.add("is-invalid");
                break;
            default:
                $dni.classList.remove("is-invalid");
                $dni.classList.add("is-valid")
                $dniErrors.innerHTML = "";
                break
        }
    })

    $email.addEventListener("blur", ()=>{

        switch(true) {/* se va a evaluar que no use numeros y otra cosa */
            case !$email.value.trim():  /* que no se coloquen espacios */
                $emailErrors.innerHTML = "El email es requerido";
                $email.classList.add("is-invalid");
                break;
            case !regExEmail.test($email.value):
                $emailErrors.innerHTML = "su email es invalido";
                $email.classList.add("is-invalid");
                break;
            default:
                $email.classList.remove("is-invalid");
                $email.classList.add("is-valid")
                $emailErrors.innerHTML = "";
                break
        }
    })

    $pass.addEventListener("blur", ()=>{

        switch(true) {
            case !$pass.value.trim(): 
                $passErrors.innerHTML = "Password requerido";
                $pass.classList.add("is-invalid");
                break;
            case !regExPass.test($pass.value):
                $passErrors.innerHTML = "La contraseña debe tener: entre 6 y 12 caracteres, al menos una mayúscula, una minúscula y un número"
                $pass.classList.add("is-invalid");
                break;
            default:
                $pass.classList.remove("is-invalid");
                $pass.classList.add("is-valid")
                $passErrors.innerHTML = "";
                break
        }
    })

    $pass.addEventListener('blur', function(){
        switch (true) {
            case !$pass.value.trim():
                $passErrors.innerHTML = 'El campo de la contraseña es obligatorio'
                $pass.classList.add('is-invalid')
                break;
            case !regExPass.test($pass.value):
                $passErrors.innerHTML = 'La contraseña debe tener: entre 6 y 12 caracteres, al menos una mayúscula, una minúscula y un número';
                $pass.classList.add('is-invalid')
                break;    
            default:
                $pass.classList.remove("is-invalid");
                $pass.classList.add('is-valid')
                $passErrors.innerHTML = ""
                break;
        }
    })


    $pass2.addEventListener('blur', function(){
        switch (true) {
            case !$pass2.value.trim():
                $pass2Errors.innerHTML = 'Reingresa tu contraseña'
                $pass2.classList.add('is-invalid')
                break;
            case $pass2.value !== $pass.value:
                $pass2Errors.innerHTML = 'Las contraseñas no coinciden';
                $pass2.classList.add('is-invalid')
                break;    
            default:
                $pass2.classList.remove("is-invalid");
                $pass2.classList.add('is-valid')
                $pass2Errors.innerHTML = ""
                break;
        }
    })

    $fecha.addEventListener("blur", ()=> {

        switch (true) {
            case !$fecha.value.trim():
                $fechaErrors.innerHTML ="La fecha es requerido"
                $fecha.classList.add("is-invalid")
                break;
            case moment($fecha.value) > moment() :
                $fechaErrors.innerHTML ="Fecha invalida"
                $fecha.classList.add("is-invalid")
                break;
            case moment().diff(moment($fecha.value), "years") < 18 :
                $fechaErrors.innerHTML ="Debes tener mas de 18 años"
                $fecha.classList.add("is-invalid")
                break;
            default:
                $fecha.classList.remove("is-invalid");
                $fecha.classList.add('is-valid')
                $fechaErrors.innerHTML = ""
                break;
        }

    })

    $sexo.addEventListener('blur', function(){
        if(!$sexo.value.trim()){
             $sexErrors.innerHTML = 'Este campo es requerido';
             $sexo.classList.add('is-invalid')
         } else {
             $sexo.classList.remove('is-invalid');
             $sexo.classList.add('is-valid');
             $sexErrors.innerHTML = ''
         }
    })


    $terms.addEventListener('click', function (){
        $terms.value = "on"
        $terms.classList.toggle('is-valid')
        $terms.classList.remove('is-invalid')
        $termsErrors.innerHTML = ""
    })

    $form.addEventListener("submit",function(event){

        event.preventDefault()
        let elementsForm = this.elements;
        let errores = false
        
        console.log(elementsForm)

        for (let index = 0; index < elementsForm.length -1 ; index++) {
            if(elementsForm[index].value == ""
            && elementsForm[index].name !== "apellido"
            && elementsForm[index].type !== "file"
            || elementsForm[index].classList.contains("is-invalid")){
                elementsForm[index].classList.add("is-invalid")
                submitErrors.innerHTML ="Hay errores en el formnulario"
                errores = true
            }
        }

        if($terms.checked){
            $terms.classList.add("is-invalid");
            $termsErrors.innerHTML = "DEBES los terminos y condiciones"
        }

        if(!errores){
            alert("validado")
            $form.submit()
        }
    })


                    /* CODIGO DE LA IMAGEN */
    $file.addEventListener('change', 
    function fileValidation(){
        let filePath = $file.value, //Capturo el valor del input
            allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i //Extensiones permitidas
        if(!allowefExtensions.exec(filePath)){ //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
            $fileErrors.innerHTML = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)';
            $file.value = '';

            $imgPreview.innerHTML = '';
            return false;
        }
        else{
            // Image preview
            console.log($file.files);
            if($file.files && $file.files[0]){
                let reader = new FileReader();
                reader.onload = function(e){
                    $imgPreview.innerHTML = '<img src="' + e.target.result +'"/>';
                };
                reader.readAsDataURL($file.files[0]);
                $fileErrors.innerHTML = '';
                $file.classList.remove('is-invalid')
            }
        }
    })

    
    $form.addEventListener("submit", function(event) {

        event.preventDefault()
        let elementsForm = this.elements;
        let errores = false;

        console.log(elementsForm)

        for (let index = 0; index < elementsForm.length - 1; index++) {
            if(elementsForm[index].value == ""
            && elementsForm[index].name !== "apellido"
            && elementsForm[index].type !== "file"
            || elementsForm[index].classList.contains("is-invalid")){
                elementsForm[index].classList.add("is-invalid");
                submitErrors.innerHTML = "Hay errores en el formulario"
                errores = true;
            }
        }

        if(!$terms.checked){
            $terms.classList.add("is-invalid");
            $termsErrors.innerHTML = "Debes los términos y condiciones";
        }

        if(!errores){
            alert("Validado!")
            $form.submit()
        }

    })

 


})