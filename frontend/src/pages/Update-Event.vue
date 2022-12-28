<template>
    <div class="row">
        <div class="col-12">
            <InlineLoader v-if="loading" />
            <div v-else class="card">
                <div class="card-header bg-white">
                    <h5><strong>Events</strong></h5>
                    <span class="text-muted">Edit an event! - </span>
                    <a style="color: #4F47E5; font-weight: 600; cursor: pointer;" @click.prevent="$router.push('/')">
                        Back
                    </a>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-12">
                            <p class="input-label">Name</p>
                            <Input v-model.trim="eventInput.name"
                                :class="['input', errorData.name ? 'error-border' : '']"></Input>
                            <p class="error-text" v-if="errorData.name">{{ errorData.name }}</p>
                        </div>
                        <div class="col-md-8">
                            <p class="input-label">Location</p>
                            <select class="form-control" v-model="eventInput.location">
                                <option v-for="(item, index) in countryList" :key="index" :value="item">{{ item }}
                                </option>
                            </select>
                            <p class="error-text" v-if="errorData.location">{{ errorData.location }}</p>
                        </div>
                        <div class="col-md-4">
                            <p class="input-label">Date</p>
                            <DatePicker v-model.trim="eventInput.date" type="datetime" placeholder="Select date"
                                style="width:100%" :class="errorData.location ? 'error-border' : ''">
                            </DatePicker>
                            <p class="error-text" v-if="errorData.date">{{ errorData.date }}</p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 submit-btn">
                            <Button @click="updateEvent" type="primary">Update</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import InlineLoader from "../components/loader/Inline-Lodaer.vue"
import CountryList from "../common/country.json"
import moment from "moment"
export default {
    components: {
        InlineLoader
    },

    data() {
        return {
            countryList: CountryList,
            loading: true,
            eventInput: {
                name: "",
                location: "",
                date: ""
            },

            errorData: {
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
                this.errorData.name = "Name is required"
            }
            if (this.eventInput.location === '') {
                isValid = false
                this.errorData.location = "Location is required"
            }
            if (this.eventInput.date === '') {
                isValid = false
                this.errorData.date = "Date is required"
            }
            return isValid
        },

        async updateEvent() {
            if (!this.validateInput()) return

            this.loading = true
            const res = await this.callApi('put', `/events/${this.$route.params.id}`, this.eventInput)
            if (res.status === 200) {
                this.success('Event Edited Successfully')
                this.clearData()
                this.$router.push('/')
            }
            else this.swr()
            this.loading = false
        }
    },

    async mounted() {
        this.loading = true
        const res = await this.callApi('get', `/events/${this.$route.params.id}`)
        if (res.status === 200) {
            this.eventInput = {
                name: res.data.data.name,
                location: res.data.data.location,
                date: moment(res.data.data.date).format(),
            }
            console.log(this.eventInput)
        }
        else this.swr()
        this.loading = false
    }
}

</script>