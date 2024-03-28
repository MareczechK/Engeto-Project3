/* RESPONSIVE MENU */
const menuIcon = document.querySelector('.menu-icon');
const menuList = document.querySelector('nav');
const burgetIcon = document.querySelector('.fa-solid')

menuIcon.addEventListener('click', () => {
    if (burgetIcon.classList[1] === "fa-bars") {
        burgetIcon.classList.add("fa-xmark")
        burgetIcon.classList.remove("fa-bars")
        menuList.style.display = "block"
    }
    else {
        burgetIcon.classList.add("fa-bars")
        burgetIcon.classList.remove("fa-xmark")
        menuList.style.display = "none"
    }
})

/* HOME ICONS*/

const allArticles = document.querySelectorAll('.switch');

allArticles.forEach((oneArticle) => {
    oneArticle.addEventListener('mouseenter', () => {
        oneArticle.classList.add("enlarged")
    })
    oneArticle.addEventListener('mouseleave', () => {
        oneArticle.classList.remove("enlarged")
    })
})


/* PASSWORD CHECKER */

const form = document.querySelector('form')
const pswInput = document.querySelectorAll('.password-input')
const text = document.querySelector('.text')

const getInputContent = (input) => {
    return input.value
};
const insertContent = (location, content) => {
    location.textContent = content
};
const addClass = (location, className) => {
    location.classList.add(className)
};
const removeClass = (location, className) => {
    location.classList.remove(className)
};
const textCleaner = (input1, input2, location) => {
    if (input1 == "" && input2 == "") {
        location.textContent = ""
    }
};

pswInput.forEach((input) => {
    input.addEventListener('input', () => {
        const psw1 = getInputContent(pswInput[0])
        const psw2 = getInputContent(pswInput[1])

        if (psw1 == psw2) {
            insertContent(text, "Hesla se shodují")
            addClass(text, "valid")
            removeClass(text, "invalid")
        } else {
            insertContent(text, "Hesla se neshodují")
            addClass(text, "invalid")
            removeClass(text, "valid")
        }

        textCleaner(psw1, psw2, text)
    });
});

/* SCROLL */

const icon = document.querySelector('.icon')

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        icon.style.display = "block"
    } else {
        icon.style.display = "none"
    }
})

icon.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Přidání 'smooth' zajistí plynulý animovaný
    })
})

/* DARK-LIGHT */

const switchTheme = document.querySelector('.dark-light')
const header = document.querySelector('.header');
const logo = document.querySelector('.logo')
const odkazy = document.querySelectorAll('.link')
const home = document.getElementById('home')
const furniture = document.querySelectorAll('h2')
const names = document.querySelectorAll('.name')
const ref = document.getElementById('reference')
const footer = document.querySelector('.footer-text')
const footCont = document.querySelector('footer')

let isDarkTheme = false;

switchTheme.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme; // Přepínáme mezi true a false při každém kliknutí

    if (isDarkTheme) {
        switchTheme.textContent = 'Light'; // Změníme text na tlačítku podle aktuálního stavu
        switchTheme.style.color = '#6c63ff'; // Změníme barvu textu na tlačítku
        // Aplikujeme temné téma
        header.style.backgroundColor = '#000';
        logo.style.color = 'rgb(150, 65, 255)';
        home.style.backgroundColor = '#121212';
        odkazy.forEach(odkaz => {
            odkaz.style.color = 'rgb(150, 65, 255)';
        });
        furniture.forEach(oneArt => {
            oneArt.style.color = 'rgb(150, 65, 255)';
        });
        names.forEach(name => {
            name.style.color = '#6c63ff';
        });
        ref.style.backgroundColor = '#121212';
        footer.style.color = 'rgb(150, 65, 255)';
        footCont.style.backgroundColor = '#000';
    } else {
        switchTheme.textContent = 'Dark'; // Změníme text na tlačítku podle aktuálního stavu
        switchTheme.style.color = 'rgb(150, 65, 255)'; // Změníme barvu textu na tlačítku
        // Aplikujeme světlé téma
        header.style.backgroundColor = '#1b9999f';
        logo.style.color = 'rgb(255, 92, 92)';
        home.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        odkazy.forEach(odkaz => {
            odkaz.style.color = 'rgb(255, 92, 92)';
        });
        furniture.forEach(oneArt => {
            oneArt.style.color = '#ff2d2d';
        });
        names.forEach(name => {
            name.style.color = 'rgb(255, 92, 92)';
        });
        ref.style.backgroundColor = '#1b9999';
        footer.style.color = '##efa69e';
        footCont.style.backgroundColor = 'rgba(66, 66, 66, 0.7)';
    }
});


