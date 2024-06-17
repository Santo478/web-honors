document.addEventListener("DOMContentLoaded", function () {
    const primerSel = document.getElementById("primerSel");
    const segundoSel = document.getElementById("segundoSel");
    const tercerSel = document.getElementById("tercerSel");
    const primerInput = document.getElementById('primerInput');
    const segundoInput = document.getElementById('segundoInput');

    const options = {
        Distancia: [
            { value: "kilometros", text: "Kilómetros" },
            { value: "metros", text: "Metros" },
            { value: "centimetros", text: "Centímetros" },
            { value: "millas", text: "Millas" },
            { value: "yardas", text: "Yardas" },
            { value: "pies", text: "Pies" }
        ],
        Presion: [
            { value: "pascales", text: "Pascales" },
            { value: "bar", text: "Bar" },
            { value: "psi", text: "PSI" }
        ],
        Volumen: [
            { value: 'litros', text: 'Litros'},
            { value: "millilitros", text: "Mililitros" },
            { value: "metros_cubicos", text: "Metros Cúbicos" }
        ],
        Masa: [
            { value: 'kilogramos', text: 'Kilogramos'},
            { value: 'gramos', text: 'Gramos'},
            { value: 'libras', text: "Libras"}
        ],
        Temperatura: [
            { value: 'celcius', text: 'Celcius'},
            { value: 'fahrenheit', text: 'Fahrenheit'},
            { value: 'kelvin', text: 'Kelvin'}
        ],
        Velocidad: [
            { value: 'metros_por_segundo', text: 'Metros por Segundo'},
            { value: 'kilometros_por_hora', text: 'Kilómetros por hora'},
            { value: 'millas_por_hora', text: 'Millas por hora'}
        ]
    };

    const conversionOptions = {
        pascales: [
            { value: "bar", text: "Bar" },
            { value: "psi", text: "PSI" }
        ],
        bar: [
            { value: "pascales", text: "Pascales" },
            { value: "psi", text: "PSI" }
        ],
        psi: [
            { value: "pascales", text: "Pascales" },
            { value: "bar", text: "Bar" }
        ],
        kilometros: [
            { value: "metros", text: "Metros" },
            { value: "centimetros", text: "Centímetros" },
            { value: "millas", text: "Millas" },
            { value: "yardas", text: "Yardas" },
            { value: "pies", text: "Pies" }
        ],
        metros: [
            { value: "kilometros", text: "Kilómetros" },
            { value: "centimetros", text: "Centímetros" },
            { value: "millas", text: "Millas" },
            { value: "yardas", text: "Yardas" },
            { value: "pies", text: "Pies" }
        ],
        centimetros: [
            { value: "kilometros", text: "Kilómetros" },
            { value: "metros", text: "Metros" },
            { value: "millas", text: "Millas" },
            { value: "yardas", text: "Yardas" },
            { value: "pies", text: "Pies" }
        ],
        millas: [
            { value: "kilometros", text: "Kilómetros" },
            { value: "metros", text: "Metros" },
            { value: "centimetros", text: "Centímetros" },
            { value: "yardas", text: "Yardas" },
            { value: "pies", text: "Pies" }
        ],
        yardas: [
            { value: "kilometros", text: "Kilómetros" },
            { value: "metros", text: "Metros" },
            { value: "centimetros", text: "Centímetros" },
            { value: "millas", text: "Millas" },
            { value: "pies", text: "Pies" }
        ],
        pies: [
            { value: "kilometros", text: "Kilómetros" },
            { value: "metros", text: "Metros" },
            { value: "centimetros", text: "Centímetros" },
            { value: "millas", text: "Millas" },
            { value: "yardas", text: "Yardas" }
        ],
        litros: [
            { value: "millilitros", text: "Mililitros" },
            { value: "metros_cubicos", text: "Metros Cúbicos" }
        ],
        millilitros: [
            { value: "litros", text: "Litros" },
            { value: "metros_cubicos", text: "Metros Cúbicos" }
        ],
        metros_cubicos: [
            { value: "litros", text: "Litros" },
            { value: "millilitros", text: "Mililitros" }
        ],
        kilogramos: [
            { value: "gramos", text: "Gramos" },
            { value: "libras", text: "Libras" }
        ],
        gramos: [
            { value: "kilogramos", text: "Kilogramos" },
            { value: "libras", text: "Libras" }
        ],
        libras: [
            { value: "kilogramos", text: "Kilogramos" },
            { value: "gramos", text: "Gramos" }
        ],
        celcius: [
            { value: "fahrenheit", text: "Fahrenheit" },
            { value: "kelvin", text: "Kelvin" }
        ],
        fahrenheit: [
            { value: "celcius", text: "Celsius" },
            { value: "kelvin", text: "Kelvin" }
        ],
        kelvin: [
            { value: "celcius", text: "Celsius" },
            { value: "fahrenheit", text: "Fahrenheit" }
        ],
        metros_por_segundo: [
            { value: "kilometros_por_hora", text: "Kilómetros por hora" },
            { value: "millas_por_hora", text: "Millas por hora" }
        ],
        kilometros_por_hora: [
            { value: "metros_por_segundo", text: "Metros por Segundo" },
            { value: "millas_por_hora", text: "Millas por hora" }
        ],
        millas_por_hora: [
            { value: "metros_por_segundo", text: "Metros por Segundo" },
            { value: "kilometros_por_hora", text: "Kilómetros por hora" }
        ]
    };

    const conversionMult = {
    kilometros: [
        { value: "metros", mult: 1000 },
        { value: "centimetros", mult: 100000 },
        { value: "millas", mult: 0.621371 },
        { value: "yardas", mult: 1093.61 },
        { value: "pies", mult: 3280.84 }
    ],
    metros: [
        { value: "kilometros", mult: 0.001 },
        { value: "centimetros", mult: 100 },
        { value: "millas", mult: 0.000621371 },
        { value: "yardas", mult: 1.09361 },
        { value: "pies", mult: 3.28084 }
    ],
    centimetros: [
        { value: "kilometros", mult: 0.00001 },
        { value: "metros", mult: 0.01 },
        { value: "millas", mult: 0.00000621371 },
        { value: "yardas", mult: 0.0109361 },
        { value: "pies", mult: 0.0328084 }
    ],
    millas: [
        { value: "kilometros", mult: 1.60934 },
        { value: "metros", mult: 1609.34 },
        { value: "centimetros", mult: 160934 },
        { value: "yardas", mult: 1760 },
        { value: "pies", mult: 5280 }
    ],
    yardas: [
        { value: "kilometros", mult: 0.0009144 },
        { value: "metros", mult: 0.9144 },
        { value: "centimetros", mult: 91.44 },
        { value: "millas", mult: 0.000568182 },
        { value: "pies", mult: 3 }
    ],
    pies: [
        { value: "kilometros", mult: 0.0003048 },
        { value: "metros", mult: 0.3048 },
        { value: "centimetros", mult: 30.48 },
        { value: "millas", mult: 0.000189394 },
        { value: "yardas", mult: 0.333333 }
    ],
    pascales: [
        { value: "bar", mult: 0.00001 },
        { value: "psi", mult: 0.000145038 }
    ],
    bar: [
        { value: "pascales", mult: 100000 },
        { value: "psi", mult: 14.5038 }
    ],
    psi: [
        { value: "pascales", mult: 6894.76 },
        { value: "bar", mult: 0.0689476 }
    ],
    litros: [
        { value: "millilitros", mult: 1000 },
        { value: "metros_cubicos", mult: 0.001 }
    ],
    millilitros: [
        { value: "litros", mult: 0.001 },
        { value: "metros_cubicos", mult: 0.000001 }
    ],
    metros_cubicos: [
        { value: "litros", mult: 1000 },
        { value: "millilitros", mult: 1000000 }
    ],
    kilogramos: [
        { value: "gramos", mult: 1000 },
        { value: "libras", mult: 2.20462 }
    ],
    gramos: [
        { value: "kilogramos", mult: 0.001 },
        { value: "libras", mult: 0.00220462 }
    ],
    libras: [
        { value: "kilogramos", mult: 0.453592 },
        { value: "gramos", mult: 453.592 }
    ],
    celcius: [
        { value: "fahrenheit", mult: 1.8, add: 32 },
        { value: "kelvin", mult: 1, add: 273.15 }
    ],
    fahrenheit: [
        { value: "celcius", mult: 0.555556, add: -32 },
        { value: "kelvin", mult: 0.555556, add: 255.372 }
    ],
    kelvin: [
        { value: "celcius", mult: 1, add: -273.15 },
        { value: "fahrenheit", mult: 1.8, add: -459.67 }
    ],
    metros_por_segundo: [
        { value: "kilometros_por_hora", mult: 3.6 },
        { value: "millas_por_hora", mult: 2.23694 }
    ],
    kilometros_por_hora: [
        { value: "metros_por_segundo", mult: 0.277778 },
        { value: "millas_por_hora", mult: 0.621371 }
    ],
    millas_por_hora: [
        { value: "metros_por_segundo", mult: 0.44704 },
        { value: "kilometros_por_hora", mult: 1.60934 }
    ]
};

    primerSel.addEventListener("change", function () {
        const selectedOption = primerSel.value;
        segundoSel.innerHTML = '<option value="">Elegir una opción</option>';
        tercerSel.innerHTML = '<option value="">Elegir una opción</option>';

        options[selectedOption].forEach(function (option) {
        const newOption = document.createElement("option");
        newOption.value = option.value;
        newOption.text = option.text;
        segundoSel.appendChild(newOption);
        });
        primerInput.value = '';
        segundoInput.value = '';
    });

    segundoSel.addEventListener("change", function () {
        const selectedOption = segundoSel.value;
        tercerSel.innerHTML = '<option value="">Elegir una opción</option>';


        conversionOptions[selectedOption].forEach(function (option) {
        const newOption = document.createElement("option");
        newOption.value = option.value;
        newOption.text = option.text;
        tercerSel.appendChild(newOption);
        });
        convertir();
        primerInput.value = '';
        segundoInput.value = '';
    });

    tercerSel.addEventListener("change", function () {
        convertir();
    });

    primerInput.addEventListener('input', function () {
        convertir();
    });

    function convertir() {
        const porConvertir = segundoSel.value;
        const aConvertir = tercerSel.value;
        const input1Value = parseFloat(primerInput.value);
        var result = 0

        if (conversionMult[porConvertir]) {
            const conversion = conversionMult[porConvertir].find(option => option.value === aConvertir);
            if (conversion) {
        if (porConvertir == 'celcius' && aConvertir == 'fahrenheit') {
            result = input1Value * conversion.mult + conversion.add;
        } else if (porConvertir == 'fahrenheit' && aConvertir == 'celcius'){
            result = (input1Value + conversion.add) * conversion.mult;
        } else if (conversion.add !== undefined) {
            result = input1Value * conversion.mult + conversion.add;
        } else {
            result = input1Value * conversion.mult;
        }
        segundoInput.value = result.toFixed(1);
    }
        } 
    }   
});
