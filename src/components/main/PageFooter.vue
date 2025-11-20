<template>
    <div class="page-footer text-center">
        <div class="socials">
            <a
                v-for="socials in socials"
                :href="socials.link"
                target="_blank"
            >
                <i :class="socials.icon"></i>
            </a>
        </div>

        <div class="copy-right">&copy; {{ new Date().getFullYear() }} Liam Jones.</div>
    </div>
</template>

<script>
const SOCIALS = [
    {
        link: 'https://github.com/Neptuniam',
        icon: 'fab fa-github'
    },
    {
        link: 'mailto:ljones1997@hotmail.com',
        icon: 'far fa-envelope'
    },
    {
        link: 'https://www.linkedin.com/in/liam-jones-35530b12b/',
        icon: 'fab fa-linkedin-in'
    },
    // {
    //     link: 'https://www.facebook.com/liam.jones.9212301',
    //     icon: 'fab fa-facebook-f'
    // },
    {
        link: 'https://www.instagram.com/liamjones1134/',
        icon: 'fab fa-instagram'
    }
    // {
    //     link: 'https://dribbble.com/Neptuniam/buckets',
    //     icon: 'fab fa-dribbble'
    // }
];

export default {
    data() {
        return {
            socials: SOCIALS
        };
    }
};
</script>

<style scoped>
.page-footer {
    width: 100vw;
    background-color: #45526e;
}
.page-footer .socials {
    padding: 40px 0px;

    background-color: #45526e;
}
i {
    font-size: 42px;
    color: white;

    margin: 0px 15px;

    transition: all 0.2s ease-in-out;
}
i:hover {
    color: rgb(192, 187, 187);
}

.page-footer .copy-right {
    font-family: Patua One;
    font-size: 1.05rem;
    color: grey;

    padding: 20px 0px;

    background-color: rgba(0, 0, 0, 0.2);
}
</style>
