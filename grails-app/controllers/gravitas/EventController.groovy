package gravitas

import grails.rest.RestfulController

class EventController extends RestfulController {

    static responseFormats = ['json','xml']

    EventController(){
    	super(Event)
    }
}
