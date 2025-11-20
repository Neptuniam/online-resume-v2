<template>
    <div class="section text-center">
        <div class="section-header">About Me</div>

        <div id="avatar">
            <img
                class="full-width"
                src="@/assets/img/backgrounds/1000038793.jpg"
                alt="My Avatar"
            />
        </div>

        <div class="text-body">
            Hi! I'm Liam, a member of the Univeristy of Guelph alumni and a passionate web developer.

            <div style="margin: 10px 0px">
                Over the years I have spent many hours expanding on my knowledge and skills as a programmer which is
                showcased down in the
                <a href="#projects"><i>Projects</i></a>
                section. My main focus has been on web development specializing in VueJS while also gaining extensive
                experience with frameworks such as Laravel and Flutter.
            </div>

            When I'm not taking on exciting new programming projects I enjoy playing video games, following ARGs and
            various motorsports, hitting the gym, collecting watches, and training my dog Harvard in competitive scent
            detection.
        </div>

        <div id="age">Liam Andrew Jones, {{ age }}</div>
        <div id="location">Calgary, Alberta</div>
    </div>
</template>

<script>
export default {
    computed: {
        age: function () {
            const ageDifMs = Date.now() - new Date('1997-09-19').getTime();
            const ageDate = new Date(ageDifMs); // miliseconds from epoch

            return Math.abs(ageDate.getUTCFullYear() - 1970);
        }
    }
};
</script>

<style scoped>
#avatar {
    width: 250px;
    margin: auto;
    padding: 20px 0px 50px;
}
img {
    border-radius: 50%;
}

#age,
#location {
    font-family: Katibeh;
    font-weight: bold;

    color: black;
}
#age {
    margin-top: 45px;
    font-size: calc(28px * 1.6);
    line-height: 28px;
}
#location {
    font-size: 28px;
}
</style>
