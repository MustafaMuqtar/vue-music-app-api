<template>
  <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 1rem">
            <div class="card-body p-5 text-center">
              <div class="mb-md-5 mt-md-4 pb-5">
                <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                <p class="text-white-50 mb-5">
                  Please enter your login and password!
                </p>
                <form enctype="multipart/form-data " @submit.prevent>
                  <div class="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="email"
                      class="form-control form-control-lg"
                      v-model="userService.email"
                    />
                    <label class="form-label" for="email">Email</label>
                  </div>
                  <div class="form-outline form-white mb-4">
                    <input
                      type="password"
                      id="password"
                      class="form-control form-control-lg"
                      v-model="userService.password"
                    />
                    <label class="form-label" for="password">Password</label>
                  </div>
                  <button
                    @click="userService.loginUser()"
                    class="btn btn-outline-light btn-lg px-5"
                    type="submit"
                  >
                    <span v-if="userService.isLoading"
                      ><span
                        class="spinner-grow spinner-grow-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Login...</span
                    >
                    <span v-else> Login</span>
                  </button>

                  <div
                    class="d-flex justify-content-center text-center mt-4 pt-1"
                  >
                    <a href="#!" class="text-white"
                      ><i class="fab fa-facebook-f fa-lg"></i
                    ></a>
                    <a href="#!" class="text-white"
                      ><i class="fab fa-twitter fa-lg mx-4 px-2"></i
                    ></a>
                    <a href="#!" class="text-white"
                      ><i class="fab fa-google fa-lg"></i
                    ></a>
                  </div>
                </form>
              </div>
              <div>
                <p class="mb-0">
                  Don't have an account?
                  <a href="#!" class="text-white-50 fw-bold">
                    <router-link to="/register" class="text-white-50 fw-bold">
                      Sign Up</router-link
                    ></a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { userService } from "@/store/user";
</script>
