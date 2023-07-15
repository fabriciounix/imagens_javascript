var a = "menu"


var imagens = ["img/476dc3c411ae82f0f50b93f659c11bae.jpg",
				"img/63467db458c5a15fb0884d424a94ee29.jpg",
				"img/5732ec45cf703e01ffc9e17a5dc4a245.jpg",
				"img/a91a3080c4be5e7f352dc03a676a8ef9.jpg"
			  ]		

 var f = 0
 var txt = 'Bem vindo ao site!'
 var speed = 200	

 var links = [
 				"roupas",
 				"sapatos",
 				"relógios",
 				"botas"
 			 ]  

document.getElementById("texto_menu").innerHTML = a

function cliqueUm()
{
	document.getElementById("imagem_teste").src = imagens[0]
}

function cliqueDois()
{
	document.getElementById("imagem_teste").src = imagens[1]
}

function cliqueTres()
{
	document.getElementById("imagem_teste").src = imagens[2]
}

function cliqueQuatro()
{
	document.getElementById("imagem_teste").src = imagens[3]
}

function itensdoMenu()
{
	for(var i = 0; i < 4;)
	{
		document.getElementById("menu").innerHTML += "<li>" + links[i] + "</li>"
		i++
	}
}

function menuVisivel()
{	
	
	document.getElementById("menu").style.visibility = "visible"
	
}

function esconderMenu()
{	

	document.getElementById("menu").style.visibility = "hidden"
	
}


function exibirImagem() 
{
	for(var i = 0; i < 4; i++)
	{
		document.getElementById("inserir_imagem").src = imagens[i]
		
		
	}
	setTimeout(exibirImagem, 100)
	
}


function typeWriter() {
 if (f < txt.length) {
             document.getElementById("boas_vindas").innerHTML += txt.charAt(f)
             f++
            setTimeout(typeWriter, speed)
            }
}

function duasFuncoes() 
{
	typeWriter()
	exibirImagem()
	itensdoMenu()
}