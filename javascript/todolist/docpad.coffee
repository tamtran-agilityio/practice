# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
	# enabled example for live configuration
	templateData:
		site:
			title: "to do list"
			description: """
				to do list project , to do list test , to do list practice test project.
				"""
				# The website keywords (for SEO) separated by commas
			keywords: """
					to do list ,title , website, keywoards, here, keep, them, related, to, the, content, of, your, website
					"""
			author: "to do list"
			styles: ["/css/styles.css"]
	#============================
	# enabled plugins
	watchOptions:
			preferredMethods: ['watchFile','watch']
	plugins:
		#enabled livereload
		livereload:
			enabled: true
}

# Export the DocPad Configuration
module.exports = docpadConfig