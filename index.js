const btn = document.getElementById('menu');
btn.addEventListener("click",myFunction);
let a = 2
function myFunction(e) {
    
    e.preventDefault()
        console.log(a)
        if (a % 2 == 0) {
            document.getElementsByTagName('nav')[0].setAttribute("style", 'left:0%');
            document.getElementById('close').style.display = 'block';
            document.getElementById('menu').style.display = 'none';
            a = a + 1;
        }
        else {
            console.log(a)
            document.getElementsByTagName('nav')[0].setAttribute("style",'left:-100%;transition:1s linear');
            document.getElementById('close').style.display = 'none';
            document.getElementById('menu').style.display = 'block';
            a = a + 1;
        }   
    }