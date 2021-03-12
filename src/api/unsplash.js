import axios from "axios";

export default axios.create({
    baseUrl: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID tfto7H9Q79LOX-EJ9Thh-oIANYCMGvY5FKCltbzY28g"
    }
})