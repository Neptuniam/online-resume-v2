<template>
    <div class="section">
        <div>
            <div class="section-header">Skills</div>

            <div class="section-sub-header">A summary of the skills I have acquired over my years of programming.</div>

            <div class="row text-center">
                <div class="col-md-12 col-4">
                    <i class="fas fa-american-sign-language-interpreting red-text section-content-spacing"></i>
                    <div class="section-title text-title">Languages</div>

                    <p class="text-body">
                        HTML, CSS, JavaScript, PHP,
                        <br />
                        C, Java, Python, dart,
                        <br />
                        X68 Assembly, MySQL, PostgreSQL.
                        <br />
                    </p>
                </div>

                <div class="col-md-12 col-4">
                    <i class="fas fa-book cyan-text section-content-spacing"></i>
                    <div class="section-title text-title">Areas of Focus</div>

                    <ul class="aof-left text-body">
                        <li>UI/UX Design</li>
                        <li>Web Development</li>
                        <li>Regular Expressions</li>
                        <li>Low-Level Engineering</li>
                        <li>O-O Programming</li>
                        <li>MVC paradigm</li>
                        <li>Algorithms</li>
                        <li>Linux</li>
                    </ul>

                    <ul class="aof-right text-body">
                        <li>SE Practices</li>
                        <li>Webpage Scraping</li>
                        <li>Database Management</li>
                        <li>Android App Development</li>
                        <li>Procedural Programming</li>
                        <li>REST Development</li>
                        <li>Data Structures</li>
                        <li>Windows</li>
                    </ul>
                </div>

                <div class="col-md-12 col-4">
                    <i class="fas fa-code orange-text section-content-spacing"></i>
                    <div class="section-title text-title">Frameworks and Libraries</div>

                    <p class="text-body">
                        VueJS + VueX/Vue-Router/Vuetify,
                        <br />
                        Laravel, Flutter, AngularJS, Angular6, React
                        <br />
                        REST, Material, UIkit, Bootstrap.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
i.fas {
    font-size: calc(var(--text-body-size) * 2);
}
.section-title {
    color: navy;
    font-weight: bold;
    padding: 5px 0px 10px;
}

.aof-left,
.aof-right {
    width: 50%;
    list-style-type: none;
    padding: 0px 7.5px;
}
.aof-left {
    float: left;
    text-align: right;
}
.aof-right {
    float: right;
    text-align: left;
}
</style>
