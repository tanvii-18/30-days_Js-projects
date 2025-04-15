let notifications = document.querySelector(".notifications");
let buttons = document.querySelector(".buttons");

const toastDetails = {
    success : {
        icon : "fa-solid fa-circle-check",
        title : "Success",
        para : "This is a Success toast !",
        closeBtn : "fa-solid fa-xmark",
    },
    error : {
        icon : "fa-solid fa-circle-exclamation",
        title : "Error",
        para : "This is a Error toast !",
        closeBtn : "fa-solid fa-xmark",
    },    
    warning : {
        icon : "fa-solid fa-triangle-exclamation",
        title : "Warning",
        para : "This is a Warning toast !",
        closeBtn : "fa-solid fa-xmark",
    },
    info : {
        icon : "fa-solid fa-circle-info",
        title : "Info",
        para : "This is a Info toast !",
        closeBtn : "fa-solid fa-xmark",
    }
}

function showToast(type){
    
    const {icon, title, para, closeBtn} = toastDetails[type];

    const toast = document.createElement("div");
    toast.className = `toast ${type}`

    toast.innerHTML = 
            `<i class="${icon}"></i>
            <div class="content">
                <div class="title">${title}</div>
                <span class="para">${para}</span>
            </div>
            <i class="${closeBtn}" onclick="this.parentElement.remove()"></i>`


            const toastButtons = document.querySelectorAll(".buttons button");

    notifications.appendChild(toast);

    setTimeout(()=>{
        toast.remove();
    }, 4000);

}


document.addEventListener("DOMContentLoaded", () => {
    const toastButtons = document.querySelectorAll(".buttons button");

    toastButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const type = btn.id.toLowerCase(); 
            showToast(type);
        });
    });
});