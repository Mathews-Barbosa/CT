function converterParaFahrenheit() {
    // Pegar o valor em Celsius
    var celsius = parseFloat(document.getElementById("inputCelsius").value);
    
    // Converter para Fahrenheit
    var fahrenheit = (celsius * 9/5) + 32;
    
    // Exibir o resultado arredondado para duas casas decimais
    document.getElementById("inputFahrenheit").value = fahrenheit.toFixed(2);
}

//JavaScript: Contém a lógica de conversão de temperatura. Quando o botão "Converter para Fahrenheit" 
//é clicado, a função converterParaFahrenheit() é chamada. Ela pega o valor em Celsius, 
//converte para Fahrenheit usando a fórmula apropriada e exibe o resultado no campo de saída.