<template>
    <div class="section">
        <div class="section-header">Skills</div>

        <p class="section-sub-header">A summary of the skills I have acquired over my years of programming.</p>

        <div
            id="skills-row"
            class="row text-center"
        >
            <div class="col-3">
                <i class="fas fa-american-sign-language-interpreting red-text"></i>
                <h3 class="text-title">Languages</h3>
                <p class="text-body">
                    HTML, CSS, JavaScript, PHP,
                    <br />
                    C, Java, Python, dart,
                    <br />
                    X68 Assembly, MySQL, PostgreSQL.
                    <br />
                </p>
            </div>

            <div class="col-6">
                <i class="fas fa-book cyan-text"></i>
                <h3 class="text-title">Areas of Focus</h3>

                <div class="row">
                    <div class="col-6">
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
                    </div>

                    <div class="col-6">
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
                </div>
            </div>

            <div class="col-3">
                <i class="fas fa-code orange-text"></i>
                <h3 class="text-title">Frameworks and Libraries</h3>
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
</template>

<script>
export default {};
</script>

<style scoped>
#skills-row {
    margin: 40px auto;
}

i.fas {
    font-size: calc(var(--text-body-size) * 1.8);
}
h3 {
    color: navy;
    font-weight: bold;
    padding: 5px 0px 10px;
}
.red-text {
    color: #f44336;
}
.cyan-text {
    color: #00bcd4;
}
.orange-text {
    color: #ff9800;
}

.aof-left,
.aof-right {
    list-style-type: none;
    padding: 0px 7.5px;
}
.aof-left {
    text-align: right;
}
.aof-right {
    list-style-type: none;
    text-align: left;
}
</style>
