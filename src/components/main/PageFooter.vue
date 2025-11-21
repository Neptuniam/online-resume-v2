<template>
    <div class="page-footer text-center">
        <div class="socials-row">
            <a
                v-for="socials in socials"
                :href="socials.link"
                target="_blank"
            >
                <i :class="socials.icon"></i>
            </a>
        </div>

        <div class="copy-right-row text-body">&copy; {{ new Date().getFullYear() }} Liam Jones.</div>
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
        icon: 'fas fa-envelope'
    },
    {
        link: 'https://www.linkedin.com/in/liam-jones-35530b12b/',
        icon: 'fab fa-linkedin'
    },
    {
        link: 'https://www.instagram.com/liamjones1134/',
        icon: 'fab fa-instagram'
    }
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
    color: white;

    width: 100vw;
    background-color: #45526e;
}
.page-footer .socials-row {
    padding: 40px 0px;
}
i {
    font-size: calc(var(--text-body-size) * 2);

    margin: 0px 15px;

    transition: all 0.2s ease-in-out;
}
i:hover {
    color: rgb(192, 187, 187);
}

.page-footer .copy-right-row {
    font-family: Patua One;

    padding: 20px 0px;

    background-color: rgba(0, 0, 0, 0.2);
}
</style>
