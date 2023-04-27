

let tcountClick = document.getElementById("tcount-sum");
let tcountUpdate = document.getElementById("tsum");
let tcountUnitconst = document.getElementById("tcountUnit");

let lcountClick = document.getElementById("lcount-sum");
let lcountUpdate = document.getElementById("lsum");
let lcountUnitconst = document.getElementById("lcountUnit");

let ccountClick = document.getElementById("ccount-sum");
let ccountUpdate = document.getElementById("csum");
let ccountUnitconst = document.getElementById("ccountUnit");

let gcountClick = document.getElementById("gcount-sum");
let gcountUpdate = document.getElementById("gsum");
let gcountUnitconst = document.getElementById("gcountUnit");

let mcountClick = document.getElementById("mcount-sum");
let mcountUpdate = document.getElementById("msum");
let mcountUnitconst = document.getElementById("mcountUnit");

let scountClick = document.getElementById("scount-sum");
let scountUpdate = document.getElementById("ssum");
let scountUnitconst = document.getElementById("scountUnit");

let acountClick = document.getElementById("acount-sum");
let acountUpdate = document.getElementById("asum");
let acountUnitconst = document.getElementById("acountUnit");

let thealthcountClick = document.getElementById("thealthcount-sum");
let thealthcountUpdate = document.getElementById("thealthsum");
let thealthUnitconst = document.getElementById("thealthcountUnit");

let ttrimcountClick = document.getElementById("ttrimcount-sum");
let ttrimcountUpdate = document.getElementById("ttrimsum");
let ttrimUnitconst = document.getElementById("ttrimcountUnit");

let tremovecountClick = document.getElementById("tremovecount-sum");
let tremovecountUpdate = document.getElementById("tremovesum");
let tremoveUnitconst = document.getElementById("tremovecountUnit");

let landcountClick = document.getElementById("landcount-sum");
let landcountUpdate = document.getElementById("landsum");
let landUnitconst = document.getElementById("landcountUnit");
 
let weedcountClick = document.getElementById("weedcount-sum");
let weedcountUpdate = document.getElementById("weedsum");
let weedUnitconst = document.getElementById("weedcountUnit");
 
let forgrandsum = document.getElementById("grandSumslot")
let tforgrandsum = document.getElementById("TgrandSumslot")
let wforgrandsum = document.getElementById("wgrandSumslot")
let counter=0;

function TgrandPrice(){
        tforgrandsum.innerHTML = Number(tremovecountUpdate.innerHTML)+Number(ttrimcountUpdate.innerHTML)+
        Number(thealthcountUpdate.innerHTML);
}

function grandPrice(){
    forgrandsum.innerHTML = (Number(tcountUpdate.innerHTML)+Number(lcountUpdate.innerHTML)+
    Number(ccountUpdate.innerHTML)+Number(gcountUpdate.innerHTML)+Number(mcountUpdate.innerHTML)
    +Number(scountUpdate.innerHTML)+Number(acountUpdate.innerHTML)).toPrecision(3);
}

function WgrandPrice(){
    wforgrandsum.innerHTML = Number(weedcountUpdate.innerHTML)+Number(landcountUpdate.innerHTML);
}

function TplusClick(){
        counter = Number(tcountClick.innerHTML);
        tcountClick.innerHTML = ++counter ;
        tcountUpdate.innerHTML = (counter*Number(tcountUnitconst.innerHTML)).toPrecision(3);
        grandPrice();
}
function TminusClick(){
        counter = Number(tcountClick.innerHTML);
        if(counter <=0)
        tcountClick.innerHTML = 0;
        else{
        tcountClick.innerHTML = --counter ; 
        tcountUpdate.innerHTML = (counter*Number(tcountUnitconst.innerHTML)).toPrecision(3);
        }
        grandPrice()
}

function LplusClick(){
        counter = Number(lcountClick.innerHTML);
        lcountClick.innerHTML = ++counter ;
        lcountUpdate.innerHTML = (counter*Number(lcountUnitconst.innerHTML)).toPrecision(3);
        grandPrice()
}
function LminusClick(){
        counter = Number(lcountClick.innerHTML);
        if(counter <=0)
        lcountClick.innerHTML = 0;
        else{
        lcountClick.innerHTML = --counter ; 
        lcountUpdate.innerHTML = (counter*Number(lcountUnitconst.innerHTML)).toPrecision(3);
        }
        grandPrice()
}

function CplusClick(){
    counter = Number(ccountClick.innerHTML);
    ccountClick.innerHTML = ++counter ;
    ccountUpdate.innerHTML = (counter*Number(ccountUnitconst.innerHTML)).toPrecision(3);
    grandPrice()
}
function CminusClick(){
    counter = Number(ccountClick.innerHTML);
    if(counter <=0)
    ccountClick.innerHTML = 0;
    else{
    ccountClick.innerHTML = --counter ; 
    ccountUpdate.innerHTML = (counter*Number(ccountUnitconst.innerHTML)).toPrecision(3);
    }
    grandPrice()
}

function GplusClick(){
    counter = Number(gcountClick.innerHTML);
    gcountClick.innerHTML = ++counter ;
    gcountUpdate.innerHTML = (counter*Number(gcountUnitconst.innerHTML)).toPrecision(3);
    grandPrice()
}
function GminusClick(){
    counter = Number(gcountClick.innerHTML);
    if(counter <=0)
    gcountClick.innerHTML = 0;
    else{
    gcountClick.innerHTML = --counter ; 
    gcountUpdate.innerHTML = (counter*Number(gcountUnitconst.innerHTML)).toPrecision(3);
    }
    grandPrice()
}

function MplusClick(){
    counter = Number(mcountClick.innerHTML);
    mcountClick.innerHTML = ++counter ;
    mcountUpdate.innerHTML = (counter*Number(mcountUnitconst.innerHTML)).toPrecision(3);
    grandPrice()
}
function MminusClick(){
    counter = Number(mcountClick.innerHTML);
    if(counter <=0)
    mcountClick.innerHTML = 0;
    else{
    mcountClick.innerHTML = --counter ; 
    mcountUpdate.innerHTML = (counter*Number(mcountUnitconst.innerHTML)).toPrecision(3);
    }
    grandPrice()
}

function SplusClick(){
    counter = Number(scountClick.innerHTML);
    scountClick.innerHTML = ++counter ;
    scountUpdate.innerHTML = (counter*Number(scountUnitconst.innerHTML)).toPrecision(3);
    grandPrice()
}
function SminusClick(){
    counter = Number(scountClick.innerHTML);
    if(counter <=0)
    scountClick.innerHTML = 0;
    else{
    scountClick.innerHTML = --counter ; 
    scountUpdate.innerHTML = (counter*Number(scountUnitconst.innerHTML)).toPrecision(3);
    }
    grandPrice()
}

function AplusClick(){
    counter = Number(acountClick.innerHTML);
    acountClick.innerHTML = ++counter ;
    acountUpdate.innerHTML = (counter*Number(acountUnitconst.innerHTML)).toPrecision(3);
    grandPrice()
}
function AminusClick(){
    counter = Number(acountClick.innerHTML);
    if(counter <=0)
    acountClick.innerHTML = 0;
    else{
    acountClick.innerHTML = --counter ; 
    acountUpdate.innerHTML = (counter*Number(acountUnitconst.innerHTML)).toPrecision(3);
    }
    grandPrice()
}

function TresetClick(){
    acountClick.innerHTML = 0;
    tcountClick.innerHTML = 0;
    lcountClick.innerHTML = 0;
    ccountClick.innerHTML = 0;
    gcountClick.innerHTML = 0;
    scountClick.innerHTML = 0;
    mcountClick.innerHTML = 0;
    acountUpdate.innerHTML = 0;
    tcountUpdate.innerHTML = 0;
    lcountUpdate.innerHTML = 0;
    ccountUpdate.innerHTML = 0;
    mcountUpdate.innerHTML = 0;
    scountUpdate.innerHTML = 0;
    gcountUpdate.innerHTML = 0;
    grandPrice()

}

function ThealthplusClick(){
    counter = Number(thealthcountClick.innerHTML);
    thealthcountClick.innerHTML = ++counter ;
    thealthcountUpdate.innerHTML = counter*Number(thealthUnitconst.innerHTML);
    TgrandPrice()
}
function ThealthminusClick(){
    counter = Number(thealthcountClick.innerHTML);
    if(counter <=0)
    thealthcountClick.innerHTML = 0;
    else{
    thealthcountClick.innerHTML = --counter ; 
    thealthcountUpdate.innerHTML = counter*Number(thealthUnitconst.innerHTML);
    }
    TgrandPrice()
}

function TtrimplusClick(){
    counter = Number(ttrimcountClick.innerHTML);
    ttrimcountClick.innerHTML = ++counter ;
    ttrimcountUpdate.innerHTML = counter*Number(ttrimUnitconst.innerHTML);
    TgrandPrice()
}
function TtrimminusClick(){
    counter = Number(ttrimcountClick.innerHTML);
    if(counter <=0)
    ttrimcountClick.innerHTML = 0;
    else{
    ttrimcountClick.innerHTML = --counter ; 
    ttrimcountUpdate.innerHTML = counter*Number(ttrimUnitconst.innerHTML);
    }
    TgrandPrice()
}

function TrovplusClick(){
    counter = Number(tremovecountClick.innerHTML);
    tremovecountClick.innerHTML = ++counter ;
    tremovecountUpdate.innerHTML = counter*Number(tremoveUnitconst.innerHTML);
    TgrandPrice()
}
function TrovminusClick(){
    counter = Number(tremovecountClick.innerHTML);
    if(counter <=0)
    tremovecountClick.innerHTML = 0;
    else{
    tremovecountClick.innerHTML = --counter ; 
    tremovecountUpdate.innerHTML = counter*Number(tremoveUnitconst.innerHTML);
    }
    TgrandPrice()
}

function TmresetClick(){
    tremovecountClick.innerHTML = 0;
    ttrimcountClick.innerHTML = 0;
    thealthcountClick.innerHTML = 0;
    tremovecountUpdate.innerHTML = 0;
    ttrimcountUpdate.innerHTML = 0;
    thealthcountUpdate.innerHTML = 0;
    TgrandPrice()

}

function LandplusClick(){
    counter = Number(landcountClick.innerHTML);
    landcountClick.innerHTML = ++counter ;
    landcountUpdate.innerHTML = counter*Number(landUnitconst.innerHTML);
    WgrandPrice()
}
function LandminusClick(){
    counter = Number(landcountClick.innerHTML);
    if(counter <=0)
    landcountClick.innerHTML = 0;
    else{
    landcountClick.innerHTML = --counter ; 
    landcountUpdate.innerHTML = counter*Number(landUnitconst.innerHTML);
    }
    WgrandPrice()
}
function WeedplusClick(){
    counter = Number(weedcountClick.innerHTML);
    weedcountClick.innerHTML = ++counter ;
    weedcountUpdate.innerHTML = counter*Number(weedUnitconst.innerHTML);
    WgrandPrice()
}
function WeedminusClick(){
    counter = Number(weedcountClick.innerHTML);
    if(counter <=0)
    weedcountClick.innerHTML = 0;
    else{
    weedcountClick.innerHTML = --counter ; 
    weedcountUpdate.innerHTML = counter*Number(weedUnitconst.innerHTML);
    }
    WgrandPrice()
}

function LandresetClick(){
    landcountClick.innerHTML = 0;
    weedcountClick.innerHTML = 0;
    landcountUpdate.innerHTML = 0;
    weedcountUpdate.innerHTML = 0;
    WgrandPrice()

}


