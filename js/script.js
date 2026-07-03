let h = 0;
let m = 0;
let s = 0;

let hb = document.getElementById("h");
let mb = document.getElementById("m");
let sb = document.getElementById("s");

let play = () => {
    h = Number(hb.innerHTML);
    m = Number(mb.innerHTML);
    s = Number(sb.innerHTML);
    setInterval(() => {

        if (s > 0) {
            s--;
        }
        else {
            if (m > 0) {
                m--;
                s = 59;
            }
            else {
                if (h > 0) {
                    h--;
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

    }, 1000);
}

