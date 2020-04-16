<template>

<div>
    <center>
    <h1 id="titulo"> PET RETURN HOME </h1>
    <input type="image" src="https://s3-alpha-sig.figma.com/img/554a/8b64/abb50fc6fb58226fb8d8fa2f53875ede?Expires=1587945600&Signature=U3N2cd5--vcZLZ2r9wPIZK94~Iw32nkf5ambkQ-0~6x5gAtkMgbkZQSzwGn9fAkg37PYQg14Pr~cfhM88mINvwQUR4Wec32kAXpBbiydrLo-P50zOM8H629GRkwfqrqXmqoU3Pc6wRZ3H4A47dFnosjEq2yggKr1zyaz04yUp4zyHR05e3S32wfe0LE8Vg92t6T-q42AYTeun4di0gmOrBZkwa8LJhcc5FQAACAfm8OA7SAUBzvGx849XfjI5KjC6ZMVb0yhJhTGF54CfqMMA4RHMvmFZctAFyoSOqxyS6xKj800zAebW4EVgFnAKX3MDR7vntOMHtfdOSZOzorgDw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" id="huella">
    <div><h10 id="NU">nombre usuario</h10></div>
    <input type="text" id="Nus">
       <div><h10 id="NU">Contraseña</h10></div>
    <input type="text" id="contraseña">
    <router-link to="/registrar"><b-button variant="success">registrar</b-button></router-link>

    </center>

</div>


</template>

<script>
export default { 
};     
</script>

<style scoped>
    
    #huella{

        /* position: absolute;   */
        background-position-y: 100px;
        width: 266px;
        height: 241px;
        left: 50px;
        top: 117px;
        border-radius: 120.5px;
    }

    #titulo{

        /* position: absolute; */
        width: 326px;
        height: 43px;
        left: 35px;
        top: 60px;

        font-family:erdana, sans-serif;
        font-style: italic;
        font-weight: bold;
        font-size: 32px;
        line-height: 36px;
        text-align: center;
        border: 20px solid #f1f3f6;

    }

    #NU{
        /* position: absolute; */
        width: 109px;
        height: 14px;
        left: 24px;
        top: 379px;

        font-family:Arial, Helvetica, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;

        color: #77787B;
    }

    #Nus{
        /* position: absolute; */
        width: 327px;
        height: 35px;
        left: 15px;
        top: 398px;

        background: #FFFFFF;
        border-radius: 4px;        
    }

    #contraseña{
        /* position: absolute; */
    }

</style>
