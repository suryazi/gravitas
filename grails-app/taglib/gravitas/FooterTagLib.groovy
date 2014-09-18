package gravitas

class FooterTagLib {
	static namespace="footer"
    static defaultEncodeAs = [taglib:'html']
    //static encodeAsForTags = [tagName: [taglib:'html'], otherTagName: [taglib:'none']]
    
    def thisYear = {
    	out << Calendar.getInstance().get(Calendar.YEAR)
    }
    
    def copyright = { attrs, body ->
    	out << "${attrs['startYear']} - ${thisYear()}, ${body()}"
    	out << " All Rights Reserved"
    }
}
