<template>
    <div>
        <!-- lander section -->
        <section class="section">
            <div class="container-fliud">
                <img alt="Vue logo" class="rounded-circle" src="/student.png">
                <h1>Dilpreet</h1>
                <p>Software Developer</p>
                <p>Able to provide employers with administrative support and professional communication skills.</p>
                <p>Adapt at communicating diverse audiences and collaborating cross-functinality to achieve goals.</p>
                <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target=".bd-example-modal-lg">Contact</button>
                
            </div>
        </section>

        <!-- portfolio section -->
        <section class="protfolio" name="portfolio">
            <h1>Portfolio</h1>
            <p>These are suppose to be sample projects</p>
            <div class="container">
                <div class="row">

                    <div class="col-md-4">
                            <div class="card">
                                <div class="card-head">
                                    <img alt="Vue logo" class="rounded-circle img-custome" src="/project1.jpg">
                                    <h2>Web Project</h2>
                                </div>
                                <hr>
                                <div class="card-body">
                                    <p>
                                        Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. 
                                        Nullam id dolor id nibh ultricies vehicula ut id elit. 
                                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.
                                    </p>
                                    <button type="button" class="btn btn-outline-secondary">More</button>
                                </div>
                            </div>
                            <br>
                    </div>

                    <div class="col-md-4">
                            <div class="card">
                                <div class="card-head">
                                    <img alt="Vue logo" class="rounded-circle img-custome" src="/project2.png">
                                    <h2>Calculator in Java</h2>
                                </div>
                                <hr>
                                <div class="card-body">
                                    <p>
                                        Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. 
                                        Nullam id dolor id nibh ultricies vehicula ut id elit. 
                                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.
                                    </p>
                                    <button type="button" class="btn btn-outline-secondary">More</button>
                                </div>
                            </div>
                        <br>
                    </div>  

                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-head">
                                <img alt="Vue logo" class="rounded-circle img-custome" src="/project3.jpg">
                                <h2>Game in C++</h2>
                            </div>
                            <hr>
                            <div class="card-body">
                                <p>
                                    Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. 
                                    Nullam id dolor id nibh ultricies vehicula ut id elit. 
                                    Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.
                                </p>
                                <button type="button" class="btn btn-outline-secondary">More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="education">
            <div class="container-fliud">
                <img alt="Vue logo" class="rounded-circle" src="/student.png">
                <h1>Education</h1>
                <table class="table table-bordered">
  <thead>
    <tr>
    <th>Name</th>
    <th>Course</th>
    </tr>
  </thead>
  <tr>
    <td>BCA</td>
    <td>Univeristy</td>
  </tr>
  <tr>
    <td>BCA</td>
    <td>Univeristy</td>
  </tr>
  <tr>
    <td>BCA</td>
    <td>Univeristy</td>
  </tr>
</table>
                
            </div>
        </section>

        <section class="education">
            <div class="container-fliud">
                <img alt="Vue logo" class="rounded-circle" src="/acheivement.png">
                <h1>Acheivements</h1>
                <table class="table table-bordered">
  <tr>
    <th>Academic Honor, Honorable Mentioned</th>
    <th>Academic Internships</th>
  </tr>
  <tr>
    <td>Teaching Assistant</td>
    <td>Academic Prized</td>
  </tr>
</table>
                
            </div>
        </section>

        <!-- modal for contact -->
        
        <section class="">
            <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <talk/>
                    </div>
                </div>
            </div>
        </section>
        
    </div>
</template>

<script lang="ts">
import talk from './Contact.vue'
export default {
    name:'Lander',
    components:{
        talk
    }  
}
</script>

<style lang="css" scoped>
    .section{
        padding-top: 10%;
        padding-bottom: 10%;
    }

    .protfolio{
        background-color: #34345238;
        padding-top: 8%;
        padding-bottom: 15%;
        /* padding:15% */
    }

    .img-custome{
        width: 140px;
        height: 140px;
        margin-top: 15px;
    }

</style>