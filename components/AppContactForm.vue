<template>
	<div class="form-wrapper">
		<form id="formapp" @submit="checkForm">
			<div v-if="errors.length">
				<b>Please correct the following error(s):</b>
				<ul>
					<li v-for="(error, index) in errors" :key="index">{{ error }}</li>
				</ul>
			</div>
			<div>
				<label for="your-name">your name</label>
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
			<div class="form-sent" v-if="sent">Your message has been sent.</div>
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
 	min-width:100px;
 	display: block;
}
input[type=text],
input[type=password],
textarea {
	border:1px solid rgba(0,0,0,0.25);
}
input[type=text]:focus,
input[type=password]:focus,
input.text:focus,
input.title:focus,
textarea:focus {
	border-color:#666;
}
select {
	background-color:#fff;
	border-width:1px;
	border-style:solid;
}
input[type=text],
input[type=password],
textarea,
select {
	margin:.5em 0;
	padding:10px;
	width:100%;
}
textarea {
	max-width:400px;
	height:250px;
}
.success {
	background:#e6efc2;
	color:#264409;
	border-color:#c6d880;
}

/* Form styles */
.form-container {
	margin:10px;
	padding:25px;
	background:ghostwhite;
	border-radius:6px!important;
	border:1px dashed #b5ae8d;
}
.form-sent{
	margin:0 0 10px;
	padding:5px 10px!important;
	background:green;
}
.errors {
	margin:0 0 10px;
	padding:5px 10px!important;
	border:#750000 2px solid;
	background:#ebe9ce;
	border-radius:6px;
}
.errors p {
	margin:0;
}
.errors p em {
	color:#750000;
	font-weight:bold;
}
.form-container form p {
	margin:0;
}
p {
	padding:15px 0 20px;
}
.form-container form p.note {
	margin-left:170px;
	font-size:90%;
	color:#333;
}
.form-container form fieldset {
	margin:10px 0;
	padding:10px;
	border:#ccc 1px solid;
	border-radius:6px;
}
.form-container label,.form-container span.label {
	margin-right:10px;
	padding-right:10px;
	width:150px;
	display:block;
	float:left;
	text-align:right;
	position:relative;
}
.form-container label.error,.form-container span.error {
	color:#750000;
}
.form-container input.error {
	border-color:#750000;
	background-color:#bd3e3e;
}
.form-container input:focus,.form-container input.error:focus,.form-container textarea:focus {
	background-color:#ececdb;
	border-color:#d3d3b8;
}
</style>
