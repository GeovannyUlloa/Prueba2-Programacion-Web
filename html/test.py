def conteopalabras(frase,palabra):
    palabras=frase.split(" ")
    pa=palabra
    conteo={}
    for i in palabras:
        if i == pa:
            conteo[pa]+=1
       
        if len(conteo)==0:
         conteo[palabra]=0
    return conteo
cuento_michi="hola hola hola hola hola hola hola chao chao chao chao chao"
resultado=conteopalabras(cuento_michi,"chao")
print(resultado)