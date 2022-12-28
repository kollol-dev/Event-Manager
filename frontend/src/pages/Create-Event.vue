<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header bg-white">
                    <h5><strong>Events</strong></h5>
                    <span class="text-muted">Create an event! - </span>
                    <a style="color: #4F47E5; font-weight: 600; cursor: pointer;" @click.prevent="$router.push('/')">
                        Back
                    </a>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-12">
                            <p class="input-label">Name</p>
                            <Input v-model.trim="eventInput.name"
                                :class="['input', error.name ? 'error-border' : '']"></Input>
                            <p class="error-text" v-if="error.name">{{ error.name }}</p>
                        </div>
                        <div class="col-md-8">
                            <p class="input-label">Location</p>
                            <select class="form-control" v-model="eventInput.location">
                                <option v-for="(item, index) in countryList" :key="index" :value="item">{{ item }}
                                </option>
                            </select>
                            <!-- <Input v-model.trim="eventInput.location"
                                :class="['input', error.location ? 'error-border' : '']"></Input>
                            <p class="error-text" v-if="error.location">{{ error.location }}</p> -->
                        </div>
                        <div class="col-md-4">
                            <p class="input-label">Date</p>
                            <DatePicker v-model.trim="eventInput.date" type="datetime" placeholder="Select date"
                                style="width:100%" :class="error.location ? 'error-border' : ''">
                            </DatePicker>
                            <p class="error-text" v-if="error.date">{{ error.date }}</p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 submit-btn">
                            <Button @click="createEvent" type="primary">Create</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CountryList from "../common/country.json"
export default {

    data() {
        return {
            countryList: CountryList,
            loading: false,
            eventInput: {
                name: "",
                location: "",
                date: ""
            },

            error: {
                name: false,
                location: false,
                date: false
            }
        }
    },

    methods: {
        clearData() {
            for (let i in this.eventInput) {
                this.eventInput[i] = ""
            }
        },
        clearError() {
            for (let i in this.error) {
                this.error[i] = false
            }
        },

        validateInput() {
            let isValid = true
            this.clearError()
            if (this.eventInput.name === '') {
                isValid = false
                this.error.name = "Name is required"
            }
            if (this.eventInput.location === '') {
                isValid = false
                this.error.location = "Location is required"
            }
            if (this.eventInput.date === '') {
                isValid = false
                this.error.date = "Date is required"
            }
            return isValid
        },

        async createEvent() {
            if (!this.validateInput()) return

            this.loading = true
            const res = await this.callApi('post', '/events', this.eventInput)
            if (res.status === 201) {
                this.success('Event Created Successfully')
                this.clearData()
            }
            else this.swr()
            this.loading = false
        }
    }
}

</script>