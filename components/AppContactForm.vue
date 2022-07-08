<template>
	<div class="form-container">
		<form id="formapp" @submit="checkForm">
			<div class="errors" v-if="errors.length">
				<b>Please correct the following error(s):</b>
				<ul>
					<li v-for="(error, index) in errors" :key="index">{{ error }}</li>
				</ul>
			</div>
			<div>
				<label for="your-name">Your name</label>
				<input id="your-name" v-model="name" type="text" name="your-name">
			</div>
			<div>
				<label for="your-email">E-mail</label>
				<input id="your-email" v-model="email" type="text" name="your-email" min="0">
			</div>
			<div>
				<label for="your-message">Message</label>
				<textarea id="your-message" v-model="message" name="your-message" cols="30" rows="10"></textarea>
			</div>
			<div>
				<input type="submit" value="Submit">
			</div>
			<div class="success" v-if="sent">Your message has been sent.</div>
		</form>
	</div>
</template>

<script>
import axios from "axios";

export default {
	data() {
		return {
			sent: null,
			errors: [],
			name: null,
			email: null,
			message: null
		};
	},
	methods: {
		validEmail: function(email) {
			let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		},
		checkForm: function(e) {
			e.preventDefault();
			this.errors = [];

			if (!this.name) {
				this.errors.push("Name required.");
			}

			if (!this.email) {
				this.errors.push("Email required.");
			} else
			if (!this.validEmail(this.email)) {
				this.errors.push("Valid email required.");
			}

			if (!this.message) {
				this.errors.push("Message required.");
			}

			if (!this.errors.length) {
				let bodyFormData = new FormData();
				bodyFormData.set("your-name", this.name);
				bodyFormData.set("your-email", this.email);
				bodyFormData.set("your-message", this.message);

				axios({
					method: "post",
					url:
						"https://yuyamadesign.com/media/wp-json/contact-form-7/v1/contact-forms/3/feedback",
					data: bodyFormData,
					config: { headers: { "Content-Type": "multipart/form-data" } }
				}).then((response) => {
					//Perform Success Action
					this.sent = true;
					return true;
				})
				.catch((error) => {
					// error.response.status Check status code
					console.log(response);
				}).finally((response) => {
					//Perform action in always
					console.log(response);
				});
			}
		}
	}
};
</script>

<style lang="scss" scoped>
/**
 * Basic Form Styles
 */	
 label {
 	margin:0;
 	min-width:100px;
 	display: block;
}
input[type=text],
input[type=password],
textarea,
select {
    border:1px solid $grey;
    border-radius:8px;
    background:#131313;
    color:$white;
    font-family: "Open Sans", sans-serif;
    font-size:.9rem;
    font-weight:300;
    height:50px;
    line-height:1.2rem;
}
input[type=text]:focus,
input[type=password]:focus,
input.text:focus,
input.title:focus,
textarea:focus {
    border:1px solid $grey;
    outline:1px $grey;
    background:$grey;
}
input[type=text],
input[type=password],
textarea,
select {
	margin:.5em 0 1em 0;
	padding:10px;
	width:100%;
	max-width:800px;
}
textarea {
	height:250px;
	resize:none;
}

.success {
	color:#264409;
	border:1px solid green;
	border-radius:5px;
	padding:.5rem;
	margin-top:1rem;
}

/* Form styles */
.form-container {
	
}
.errors {
	color:red;
	margin:0 0 1rem;
}
</style>
