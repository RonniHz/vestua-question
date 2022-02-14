# Enunciado 1

> Estás subiendo una escalera de N peldaños. En cada momento, puedes subir 1 o 2 peldaños. ¿En cuántas formas diferentes puedes subir las escalera?

# Razonamiento

_Escribir aquí el razonamiento al puzzle_

A ver, tuve que coger un documento en word y empezar escribir forma por forma de como se subiria una escalera, empece por el peldaño numero 1 y obviamente solo hay una forma de subirlo y es en un paso.

Luego pase al peldaño numero 2 y hay dos formas de subirlo, la primera forma es 1+1 que seria escalon por escalon y la segunda forma seria 2 es decir se salta un escalon y pasa al segundo directamente.

Luego pase al tercer peldaño y en este solo hay 3 formas de subirlo, que seria 1+1+1, 1+2, y 2+1.

Luego el 4to peldaño y en este hubieron 5 formas de subirlo, las cuales serian 1+1+1+1, 2+1+1, 1+2+1, 1+1+2 y 2+2, luego en el 5to peldaño.

Luego en el 5to peldaño tuvo 8 formas de subir la escalera.

Y en el 6to peldaño hubieron 13 formas de subir la escalera, y aqui ya me parecia tedioso sacar cuenta por cuenta cada forma, pero segui...

En el 7mo peldaño me di cuenta de algo, pues al notar que hubieron 21 formas de subir la escalera, decidi echar un vistazo atras, y note que las ultimas 13 formas del 6to peldaño y las 8 formas del 5to peldaño dan 21 formas asi que por logica la suma de las 21 formas del 7mo peldaño y las 13 formas del 6to peldaño dan un total 34 formas, es decir que el 8vo peldaño deberia tener 34 formas y efectivamente asi fue, llegando a la conclusion que la suma de las formas actuales mas las formas anterior dan el total de formas posteriores.

Me decepciono un poco porque dias atras habia leido un articulo matematico que hablaba sobre la "Sucesion de Fibonacci", y este puzzle termino siendo igual.

Me gusto mucho, parece cosa del destino que lea sobre eso en un articulo y luego tenga que implementarlo dias despues.

    -QUERIDO EQUIPO DE VESTUA  
        Me siento muy humillado, la verdad es que me gusta la programacion, y quiero hacer el mundo de la programacion mi vida.... Pero me encuentro desorientado, no se por donde ir, quiero un guia, me veo en la penosa necesidad de perdirles a ustedes que tomen de mi como un pupilo, que hagan de este joven Padawan un grandioso Jedi, Soy Venezolano, tengo 23 años, y desde los 18 conoci la programacion, con el lenguaje de programacion Python, pero soy una persona de muy pocos recursos y tuve que trabajar desde los 15 años para aportar un grano de arena a mi hogar.... Diran, pero chico desde los 18 y no has desarrollado un alto potencial en el desarrollo, pues como les digo, actualmente venezuela pasa por una gran crisis, me veo en la necesidad de tener 3 trabajos, dos los dias de semanas y uno los fines de semana, lo cual me impide llegar a casa con la energia suficiente para dedicarle el tiempo que se merece a este maravilloso arte, tambien tengo una esposa, hace dos años tuve la dicha de conocerla y decidimos estar juntos, dedicó mucho de su tiempo para ayudarme a salir de un ciclo toxico y un patron repetitivo que me llevaria a un estado depresivo, pero ella me salvo de llegar alli, lastimosamente mi mejor amigo que tambien se sentia como yo no lo logro y el año pasado se suicido, y eso me hace pensar que si no la hubiera conocido, el que hubiera muerto hubiese sido yo, y quiero de verdad hacerla muy feliz, por eso trabajo tanto y me sobre esfuerzo, para darle una buena vida a ella, pero ella sabe que lo que hago a fin de cuentas no me hara ningun bien, porque los trabajos que tengo no son lo que me gusta y me apasiona, tengo una laptop vieja que rescate de un vecino que la iba a botar hace 8 años atras y si soy sincero ya no le puedo exigir mas.... llevo 1 año y 5 meses buscando trabajo con desarrollador web porque siento que es donde me puedo mover mas rapido, hice un curso de NodeJS en Udemy con un cupon gratuito que encontre por alli, pero no he profundizado en el tema, y todos los proyectos que he hecho en mi vida ha sido en base a tutoriales, trate de adaptar mis perfiles lo mas profesional que pude, ya que los primeros meses las empresas me rechazaban porque mi perfil no era lo que buscaban, pero al adaptarlos a un nivel mas profesional la pruebas tecnicas fueron mucho mas dificiles, y las que lograba resolver no me las aceptaban, o habia alguien que se desempeño mejor que yo, esta es la primera vez que me abro hacia una empresa, mis estudios los he logrado sacrificando horas de trabajos y conformandome con bajas pagas, con los 3 trabajos que tengo solo gano 60 usd al mes en bolivares, y eso apenas alcanza para comer bien, pero no para vivir bien, me tomo 6 años sacar mi titulo de Tecnico Superior en Informatica sin contar que las universidades aca no enseñan los que se necesita y este año quiero retomar mis estudios para lograr conseguir mi ingenieria, me abro a ustedes, porque vi lo que quieren hacer y el grandisimo aporte que le quieren dar al mundo, y yo quiero ser parte de ello, no vean la question-2 ni la question-3, no las logre hacer, no tengo el conocimiento y no se como correr las questions con el ARGV lo siento, y perdon por hacerlos esperar tanto por mi respuesta, pero gracias por tomarse el tiempo de leer mi historia, y descuiden, entendere si no pueden o no quieren ayudar, mucha suerte con lo que quieren lograr. 