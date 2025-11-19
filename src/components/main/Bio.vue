<template>
    <div class="section">
        <div class="section-header">About Me</div>

        <div id="avatar">
            <img
                src="@/assets/img/backgrounds/1000038793.jpg"
                alt="My Avatar"
            />
        </div>

        <div>
            <p>
                Hi! I'm Liam, a member of the Univeristy of Guelph alumni and a
                passionate web developer.
            </p>

            <div style="margin: 10px 0px">
                <p>
                    Over the years I have spent many hours expanding on my
                    knowledge and skills as a programmer which is showcased down
                    in the
                    <a href="#projects"><i>Projects</i></a>
                    section. My main focus has been on web development
                    specializing in VueJS while also gaining extensive
                    experience with frameworks such as Laravel and Flutter.
                </p>
            </div>

            <p>
                When I'm not taking on exciting new programming projects I enjoy
                playing video games, following ARGs and various motorsports,
                hitting the gym, collecting watches, and training my dog Harvard
                in competitive scent detection.
            </p>
        </div>

        <div id="age">Liam Andrew Jones, {{ age }}</div>
        <div id="location">Calgary, Alberta</div>
    </div>
</template>

<script>
export default {
    computed: {
        age: function () {
            const today = new Date();
            const birthDate = new Date('1997-09-19');

            let age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();

            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
                age--;

            return age;
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
    width: 100%;
    border-radius: 50%;
}

p {
    font-size: 22px;
    text-align: center;
}

#age,
#location {
    font-family: Katibeh;
    font-weight: bold;

    color: black;

    text-align: center;
}
#age {
    margin-top: 40px;
    font-size: calc(30px * 1.6);
    line-height: 30px;
}
#location {
    font-size: 30px;
}
</style>
