class UrlMappings {

	static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/data/events"(resources:"event")

        "/"(view:"/index")
        "500"(view:'/error')
	}
}
