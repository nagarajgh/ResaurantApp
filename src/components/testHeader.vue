<script></script>

<template>
  <div class="header">
    <div class="navbar">
      <div class="logo">
        <h3>Master Chef</h3>
      </div>
      <div class="navigation">
        <div>Home</div>
        <div>About Us</div>
        <div>Contact Us</div>
      </div>
    </div>
    <div class="heading">
        <div>
            <h1>This is main heading</h1>
        </div>
        <div>
            <h1>This is image div</h1>
        </div>
    </div>
  </div>
</template>

<style>
.navbar, .navigation{
    display: flex;
}
.logo{
    display: flext;
    flex: 45%;
    max-width: 45%;
    text-align: center;
    align-items: center;
    padding: 2em;
}
.navigation{
    display: flex;
    display: flext;
    flex: 45%;
    max-width: 45%;
    justify-content: center;
    gap: 3em;
    align-items: center;
    padding: 2em;
}
.heading{
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.heading > div{
    flex: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
