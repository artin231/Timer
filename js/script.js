let h = 0;
let m = 0;
let s = 0;

let hb = document.getElementById("h");
let mb = document.getElementById("m");
let sb = document.getElementById("s");
let btn = document.getElementById('play');
clicked = false;
st = {'click':false,remain_h:Number(hb.innerHTML),remain_m:Number(mb.innerHTML),remain_s:Number(sb.innerHTML),int:null};
let min = 1;
let play = () => {
    var int;
    h = Number(hb.innerHTML);
    m = Number(mb.innerHTML);
    s = Number(sb.innerHTML);
    min = 1;
    let run = () => {

            if (s > 0) {
                s-=min;
            }
            else {
                if (m > 0) {
                    m-=min;
                    s = 59;
                }
                else {
                    if (h > 0) {
                        h-=min;
                        m = 59;
                        s = 59;
                    }
                    else {
                        return;
                    }
                }
            }

            sb.innerHTML = s;
            mb.innerHTML = m;
            hb.innerHTML = h;
    }
    if (!st.clicked) {
        btn.innerHTML = 'stop';
        st.clicked = true;
        st.int = setInterval(run, 1000);
    }
    else{
        clearInterval(st.int);
        st.int = null;
        st.clicked = false;
        min = null;
        btn.innerHTML = 'start'

    }


}

