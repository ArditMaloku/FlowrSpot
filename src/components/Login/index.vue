<template>
    <div class="Login">
        <a @click="modalVisible = true" class="Login__text" :buttonText="'Login to your Account'">Login</a>
        <modal-component v-if="modalVisible" :buttonText="'Login to your Account'" @clickOutside="modalVisible = false">
            <template v-slot:header>
                <h1>Welcome Back</h1>
            </template>
            <template v-slot:body>
                <Form class="Login__form" @submit="onSubmit" :validation-schema="schema">
                    <input-component name="email" type="email" label="Email Address" />
                    <input-component name="password" type="password" label="Password" />
                    <button-component type="submit" class="Login__button" :buttonText="'Login to your Account'" />
                </Form>
            </template>
        </modal-component>
    </div>
</template>
<script src="./Login" lang="ts"></script>
<style src="./Login.scss" lang="scss"></style>
