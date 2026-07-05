let h = 0;
let m = 0;
let s = 0;

let time = document.getElementById('time')
let btn = document.getElementById('play');
let hid_btn = document.querySelector('#reset');
let ch_btn = document.querySelectorAll('.down_btn');
console.log(ch_btn);

clicked = false;
let rem = time.innerHTML.split(':')
console.log(Number(rem[1]));

console.log(rem);

st = { 'click': false, remain: rem, int: null ,current:5};
let min = 1;
let play = () => {
    rem = time.innerHTML.split(':')

    var int;
    h = rem[0];
    m = rem[1];
    s = rem[2];
    min = 1;
    let run = () => {

        if (s > 0) {
            s -= min;
        }
        else {
            if (m > 0) {
                m -= min;
                s = 59;
            }
            else {
                if (h > 0) {
                    h -= min;
                    m = 59;
                    s = 59;
                }
                else {
                    return;
                }
            }
        }
        time.innerHTML = `${h}:${m}:${s}`
    }
    if (!st.clicked) {
        hid_btn.classList.remove('hidden')
        console.log(hid_btn);

        btn.innerHTML = 'stop';
        st.clicked = true;
        st.int = setInterval(run, 1000);
    }

    else {
        hid_btn.classList.add('hidden');
        clearInterval(st.int);
        st.int = null;
        st.clicked = false;
        min = null;
        btn.innerHTML = 'start'

    }
    hid_btn.addEventListener('click', () => {
        hid_btn.classList.add('hidden');
        clearInterval(st.int);
        st.int = null;
        st.clicked = false;
        min = null;
        btn.innerHTML = 'start';
        time.innerHTML = `0:${st.current}:00`
    })




}
ch_btn.forEach(ch => {
    ch.addEventListener('click', () => {
        console.log(1)
        hid_btn.classList.add('hidden');
        clearInterval(st.int);
        st.int = null;
        st.clicked = false;
        min = null;
        btn.innerHTML = 'start';        
        rem[1] = Number(ch.id);
        time.innerHTML = `0:${rem[1]}:00`
        st.current = Number(ch.id);

    })
})


