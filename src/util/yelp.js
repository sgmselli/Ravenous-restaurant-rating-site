const apiKey = 'PKS8Rc1-i0sQNjnEQvyRtXQjICfigzI5fzXIDml-qesxwMve2m4d0sdrniLpBmGPD4EVfVGz6gk0WnmnKV5vKgOOE4scaQalSJRQ-VC-5DXJyJOXhZHvkwuLoRbYY3Yx';

const Yelp = {

    search(term, location, sortBy) {

        const path = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term='+term+'&location='+location+'&sort_by='+sortBy;

        return (
            fetch(path, {
                headers : {
                    Authorization : `Bearer ${apiKey}`
                }
            }).then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error(response)
            }).then(jsonResponse => {
                if (jsonResponse.businesses) {
                    return (jsonResponse.businesses).map(business => {
                        return {
                            id : business.id,
                            imageSrc : business.image_url,
                            name : business.name,
                            address : business.location.address1,
                            city : business.location.city,
                            state : business.location.country,
                            zipCode : business.location.zip_code,
                            category : business.categories.title,
                            rating : business.rating,
                            reviewCount : business.review_count
                        }
                    })
                }
            })
        )
    }

}

export default Yelp;