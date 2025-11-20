document.addEventListener("input", function(e){

    // CPF
    if(e.target.id === "cpf"){
        let v = e.target.value.replace(/\D/g, "");
        v = v.replace(/(\d{3})(\d)/, "$1.$2");
        v = v.replace(/(\d{3})(\d)/, "$1.$2");
        v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        e.target.value = v;
    }

    // Telefone
    if(e.target.id === "telefone"){
        let v = e.target.value.replace(/\D/g, "");
        v = v.replace(/(\d{2})(\d)/, "($1) $2");
        v = v.replace(/(\d{5})(\d)/, "$1-$2");
        e.target.value = v;
    }

    // CEP
    if(e.target.id === "cep"){
        let v = e.target.value.replace(/\D/g, "");
        v = v.replace(/(\d{5})(\d)/, "$1-$2");
        e.target.value = v;
    }

});
