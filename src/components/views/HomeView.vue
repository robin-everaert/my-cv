<template>
    <main class="main" id="home-main">
        <div class="container">
            <div class="row">
                <h1>{{ $t('home.title') }}</h1>
                <div class="presentation-container col-12 d-flex justify-content-center align-items-center">
                    <div class="presentation-content">
                        <p>{{ $t('home.presentation.p1') }}</p>    
                        <p>{{ $t('home.presentation.p2') }}</p>
                        <p>{{ $t('home.presentation.p3') }}</p>  
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="download-cv-container col-12 d-flex justify-content-center align-items-center">
                    <a href="/cv_everaert_robin-en.pdf" download="cv_everaert_robin-fr.pdf"
                    >{{ $t('home.download_cv') }}</a>
                </div>
            </div>
        </div>
    </main>
</template>

<script></script>
