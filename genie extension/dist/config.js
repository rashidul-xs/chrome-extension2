window.getGenie = {
    "config": {
        "version": "1.1.3",
        "restNonce": "dcd9da3565",
        "siteUrl": "https://geniewporg.test",
        "assetsUrl": "https://geniewporg.test/wp-content/plugins/getgenie/assets/",
        "baseApi": "https://geniewporg.test/index.php?rest_route=/getgenie/v1/",
        "parserApi": "https://nlp.getgenie.ai/",
        "parserApiWp": "https://geniewporg.test/index.php?rest_route=/getgenie/v1/parser/",
        "usageLimitStatsApi": "https://geniewporg.test/index.php?rest_route=/getgenie/v1/limit_usage_stats/",
        "storeApi": "https://geniewporg.test/index.php?rest_route=/getgenie/v1/store/",
        "licenseApi": "https://geniewporg.test/index.php?rest_route=/getgenie/v1/license/",
        "feedbackApi": "https://geniewporg.test/index.php?rest_route=/getgenie/v1/feedback/",
        "historyApi": "https://geniewporg.test/index.php?rest_route=/getgenie/v1/history/",
        "templateList": {
            "before-after-bridge-bab": {
                "title": "Before After Bridge (BAB)",
                "templateSlug": "before-after-bridge-bab",
                "description": "BAB formula shows the before and after of your product/solution in your content",
                "inputFields": [
                    {
                        "label": "Product name",
                        "name": "productName",
                        "sample": "Cadbury Dairy Milk Silk",
                        "placeholder": "Enter the product name",
                        "required": true
                    },
                    {
                        "label": "Product description",
                        "name": "productDescription",
                        "sample": "Cadbury Dairy Milk Silk is all about regaling the chocolate's richness and creaminess. The classic taste of Cadbury chocolates offers you the reason to celebrate every small and big occasion of happiness.",
                        "placeholder": "Enter the product description",
                        "required": true
                    }
                ],
                "categories": {
                    "general": {
                        "title": "General",
                        "slug": "general"
                    }
                }
            },
            "problem-agitate-solution-pas": {
                "title": "Problem, Agitate, Solution (PAS)",
                "templateSlug": "problem-agitate-solution-pas",
                "description": "Make use of the proven copywriting formula — Problem, Agitate, Solution (PAS)",
                "inputFields": [
                    {
                        "label": "Product name",
                        "name": "productName",
                        "sample": "Canva",
                        "placeholder": "Enter the product name",
                        "required": true
                    },
                    {
                        "label": "Product description",
                        "name": "productDescription",
                        "sample": "Canva is a graphic design platform, used to create social media graphics, presentations, posters, documents and other visual content. The app includes templates for users to use. The platform is free to use and offers paid subscriptions such as Canva Pro and Canva for Enterprise for additional functionality.",
                        "placeholder": "Enter the product description",
                        "required": true
                    }
                ],
                "categories": {
                    "general": {
                        "title": "General",
                        "slug": "general"
                    }
                }
            },
            "attention-interest-desire-action-aida": {
                "title": "Attention Interest Desire Action (AIDA)",
                "templateSlug": "attention-interest-desire-action-aida",
                "description": "Generate sales/marketing copies by applying the renowned AIDA formula",
                "inputFields": [
                    {
                        "label": "Product name",
                        "name": "productName",
                        "sample": "Trello",
                        "placeholder": "Enter the product name",
                        "required": true
                    },
                    {
                        "label": "Product description",
                        "name": "productDescription",
                        "sample": "Trello is a collaborative work management app designed to track team projects, highlight tasks underway, show who they are assigned to, and detail progress towards completion.\r\n\r\nAt its core, Trello relies on the principles of Kanban project boards to visualize workflows, providing managers and team members with a simple overview of a project from start to finish.\r\n\r\nTrello’s key components are boards, lists, and cards.",
                        "placeholder": "Enter the product description",
                        "required": true
                    }
                ],
                "categories": {
                    "general": {
                        "title": "General",
                        "slug": "general"
                    }
                }
            },
            "pros-and-cons": {
                "title": "Pros and Cons",
                "templateSlug": "pros-and-cons",
                "description": "Generate a list of pros and cons about any given topic to utilize in your content",
                "inputFields": [
                    {
                        "label": "Topic",
                        "name": "topic",
                        "sample": "Modern medicine",
                        "placeholder": "Enter a brief but specific topic to get pros and cons of it",
                        "required": true
                    }
                ],
                "categories": {
                    "general": {
                        "title": "General",
                        "slug": "general"
                    }
                }
            },
            "feature-benefit": {
                "title": "Feature - Benefit",
                "templateSlug": "feature-benefit",
                "description": "Describe what your product/service does and get the detailed benefits in return",
                "inputFields": [
                    {
                        "label": "Feature Description",
                        "name": "featureDescription",
                        "sample": "Gorilla Glass's special composition enables the potassium ions to diffuse far into the surface, creating high compressive stress deep into the glass. This layer of compression creates a surface that is more resistant to damage from everyday use.",
                        "placeholder": "Enter the product's feature to generate the benefits",
                        "required": true
                    }
                ],
                "categories": {
                    "general": {
                        "title": "General",
                        "slug": "general"
                    }
                }
            },
            "bullet-point-to-answers": {
                "title": "Bullet Point to Answers",
                "templateSlug": "bullet-point-to-answers",
                "description": "Get bulleted lists of answers to related questions while writing long-form content",
                "inputFields": [
                    {
                        "label": "Question",
                        "name": "question",
                        "sample": "How to make a cup of tea?",
                        "placeholder": "Enter the question to get an answer in bullet points",
                        "required": true
                    }
                ],
                "categories": {
                    "general": {
                        "title": "General",
                        "slug": "general"
                    }
                }
            },
            "definition": {
                "title": "Definition",
                "templateSlug": "definition",
                "description": "Need a brief explanation? Want to utilize featured snippets? Try our definition template",
                "inputFields": [
                    {
                        "label": "Topic",
                        "name": "topic",
                        "sample": "venture capital",
                        "placeholder": "Enter the topic for the definition",
                        "required": true
                    }
                ],
                "categories": {
                    "general": {
                        "title": "General",
                        "slug": "general"
                    }
                }
            },
            "product-ad-copy": {
                "title": "Product Ad Copy",
                "templateSlug": "product-ad-copy",
                "description": "Generate a basic ad copy for your product inputting only a brief introduction/description",
                "inputFields": [
                    {
                        "label": "Product name",
                        "name": "productName",
                        "sample": "Buffer",
                        "placeholder": "Enter the product name",
                        "required": true
                    },
                    {
                        "label": "Product description",
                        "name": "productDescription",
                        "sample": "Buffer is a software application for the web and mobile, designed to manage accounts in social networks, letting users schedule posts to Twitter, Facebook, Instagram, Pinterest, and LinkedIn, as well as analyze their results and engage with their community.",
                        "placeholder": "Enter the product description",
                        "required": true
                    }
                ],
                "categories": {
                    "general": {
                        "title": "General",
                        "slug": "general"
                    }
                }
            },
            "taglines": {
                "title": "Taglines",
                "templateSlug": "taglines",
                "description": "Get genie to write taglines for your brands, products, services, or any content",
                "inputFields": [
                    {
                        "label": "Product name",
                        "name": "productName",
                        "sample": "dunkin' donuts",
                        "placeholder": "Enter the product name",
                        "required": true
                    }
                ],
                "categories": {
                    "general": {
                        "title": "General",
                        "slug": "general"
                    }
                }
            },
            "social-media-postcopy": {
                "title": "Social Media Post/Copy",
                "templateSlug": "social-media-postcopy",
                "description": "Write copies for all your social media handles using a brief description of your product",
                "inputFields": [
                    {
                        "label": "Product name",
                        "name": "productName",
                        "sample": "Semrush",
                        "placeholder": "Enter the product name",
                        "required": true
                    }
                ],
                "categories": {
                    "general": {
                        "title": "General",
                        "slug": "general"
                    }
                }
            },
            "product-description": {
                "title": "Product Description",
                "templateSlug": "product-description",
                "description": "Name any product (or service) and get Genie to write a convincing description for it",
                "inputFields": [
                    {
                        "label": "Product name",
                        "name": "productName",
                        "sample": "Boots Cucumber Moisturising Cream",
                        "placeholder": "Enter the product name",
                        "required": true
                    }
                ],
                "categories": {
                    "general": {
                        "title": "General",
                        "slug": "general"
                    }
                }
            },
            "sentence-rewriter": {
                "title": "Sentence Rewriter",
                "templateSlug": "sentence-rewriter",
                "description": "Get different variations of your given sentence with rewritten versions from Genie",
                "inputFields": [
                    {
                        "label": "Sentence to Rewrite",
                        "name": "sentenceToRewrite",
                        "sample": "When we talk about a particular topic, clarity is very important.",
                        "placeholder": "Enter your sentence to get a rewritten version",
                        "required": true
                    }
                ],
                "categories": {
                    "general": {
                        "title": "General",
                        "slug": "general"
                    }
                }
            },
            "explain-why": {
                "title": "Explain Why",
                "templateSlug": "explain-why",
                "description": "Questions need answering and concepts need explaining — let’s explain why",
                "inputFields": [
                    {
                        "label": "Your Question",
                        "name": "yourQuestion",
                        "sample": "why is the sky blue?",
                        "placeholder": "Enter a question that you need explained",
                        "required": true
                    }
                ],
                "categories": {
                    "general": {
                        "title": "General",
                        "slug": "general"
                    }
                }
            },
            "featured-snippet-numbered-list": {
                "title": "Featured Snippet (Numbered List)",
                "templateSlug": "featured-snippet-numbered-list",
                "description": "Get a detailed numbered list of how to do something with a simple one-liner input",
                "inputFields": [
                    {
                        "label": "Topic",
                        "name": "topic",
                        "sample": "how to take care of a cat",
                        "placeholder": "Enter the topic for the list of steps",
                        "required": true
                    }
                ],
                "categories": {
                    "general": {
                        "title": "General",
                        "slug": "general"
                    }
                }
            },
            "title-ideas": {
                "title": "Title Ideas",
                "templateSlug": "title-ideas",
                "description": "Get multiple title ideas off an initial title to get a variation or deploying in headers",
                "inputFields": [
                    {
                        "label": "Topic",
                        "name": "topic",
                        "sample": "Fast fashion trend",
                        "placeholder": "Enter your desired topic for title generation",
                        "required": true
                    }
                ],
                "categories": {
                    "general": {
                        "title": "General",
                        "slug": "general"
                    }
                }
            },
            "short-answer": {
                "title": "Short Answer",
                "templateSlug": "short-answer",
                "description": "Generate brief, one-sentence answer to any given question to utilize in your content",
                "inputFields": [
                    {
                        "label": "Question",
                        "name": "question",
                        "sample": "What is depreciation in accounting?",
                        "placeholder": "Enter your question",
                        "required": true
                    }
                ],
                "categories": {
                    "general": {
                        "title": "General",
                        "slug": "general"
                    }
                }
            },
            "related-topics": {
                "title": "Related Topics",
                "templateSlug": "related-topics",
                "description": "Stuck with your content? Input a paragraph and get a list of related topics to cover",
                "inputFields": [
                    {
                        "label": "Content",
                        "name": "content",
                        "sample": "Bollywood, an Indian Hollywood, refers to the Hindi-language movie industry in India. The term Bollywood combines Bombay (where most Hindi movies are made) and Hollywood (where most American movies are made). Bollywood makes many movies each year. Many Bollywood movies are called Masala movies.",
                        "placeholder": "Enter a paragraph/snippet of content",
                        "required": true
                    }
                ],
                "categories": {
                    "general": {
                        "title": "General",
                        "slug": "general"
                    }
                }
            },
            "paragraph-compression": {
                "title": "Paragraph Compression",
                "templateSlug": "paragraph-compression",
                "description": "Generate a short summary of a paragraph keeping the gist, tone, and context intact",
                "inputFields": [
                    {
                        "label": "Paragraph",
                        "name": "paragraph",
                        "sample": "With the introduction of a ‘professional portfolio’ by LinkedIn, you can now easily share visual content on your LinkedIn profile to demonstrate your capabilities more than what CVs ever could. From portfolio pieces to presentations to videos, you can now display your work on your profile by importing the content from a webpage or uploading your favorite work pieces straight from your computer. Instead of telling potential employers what you can do, display your work and let it speak for itself.",
                        "placeholder": "Enter the paragraph to be summarized",
                        "required": true
                    }
                ],
                "categories": {
                    "general": {
                        "title": "General",
                        "slug": "general"
                    }
                }
            },
            "next-sentence": {
                "title": "Next sentence",
                "templateSlug": "next-sentence",
                "description": "Provide a sentence/line of content and get a follow-up sentence in return maintaining coherence",
                "inputFields": [
                    {
                        "label": "Sentence",
                        "name": "sentence",
                        "sample": "It was a cold winter night, perfect for Vlad the vampire to go out hunting for his next prey.",
                        "placeholder": "Enter the sentence to be followed-up",
                        "required": true
                    }
                ],
                "categories": {
                    "general": {
                        "title": "General",
                        "slug": "general"
                    }
                }
            },
            "paragraph-rewriter": {
                "title": "Paragraph Rewriter",
                "templateSlug": "paragraph-rewriter",
                "description": "Put a new and unique spin to your given content with rewritten versions of it",
                "inputFields": [
                    {
                        "label": "Paragraph",
                        "name": "paragraph",
                        "sample": "Most of the people of our country are farmers, workers, and day laborers who live below the poverty line. But the price of essential commodities is soaring higher and higher. It has now become impossible for them to make both ends meet. It has severely hit the day laborers, the lower and middle-class families, and the salaried class too. The prices of rice, vegetables, clothes, mustard oil, medicine, and other essential commodities are also increasing by leaps and bounds.",
                        "placeholder": "Enter the paragraph to be rewritten",
                        "required": true
                    }
                ],
                "categories": {
                    "general": {
                        "title": "General",
                        "slug": "general"
                    }
                }
            },
            "next-paragraph": {
                "title": "Next Paragraph",
                "templateSlug": "next-paragraph",
                "description": "Input your paragraph/lines of content and get a contextual follow-up content in return",
                "inputFields": [
                    {
                        "label": "Paragraph",
                        "name": "paragraph",
                        "sample": "In less than a generation, social media has evolved from direct electronic information exchange, to virtual gathering place, to retail platform, to vital 21st-century marketing tool.",
                        "placeholder": "Enter the paragraph to be followed-up",
                        "required": true
                    }
                ],
                "categories": {
                    "general": {
                        "title": "General",
                        "slug": "general"
                    }
                }
            },
            "list-of-questions": {
                "title": "List of Questions",
                "templateSlug": "list-of-questions",
                "description": "Generate lists of questions for your given topic and utilize them in your title/content",
                "inputFields": [
                    {
                        "label": "Topic",
                        "name": "topic",
                        "sample": "Breakfast at home",
                        "placeholder": "Enter the topic for the list of related questions",
                        "required": true
                    }
                ],
                "categories": {
                    "general": {
                        "title": "General",
                        "slug": "general"
                    }
                }
            },
            "meta-description": {
                "title": "Meta Description",
                "templateSlug": "meta-description",
                "description": "Leverage SERP rankings with outstanding meta description of your blog post/page",
                "inputFields": [
                    {
                        "label": "Title",
                        "name": "title",
                        "sample": "15 SEO tips & tricks to rank content instantly!",
                        "placeholder": "Enter the title to generate a meta description for it",
                        "required": true
                    }
                ],
                "categories": {
                    "general": {
                        "title": "General",
                        "slug": "general"
                    }
                }
            },
            "paragraph-answer": {
                "title": "Paragraph Answer",
                "templateSlug": "paragraph-answer",
                "description": "Get paragraph-long answers of informative content for every question you ask",
                "inputFields": [
                    {
                        "label": "Question",
                        "name": "question",
                        "sample": "Which country is going to be the next super power of the world?",
                        "placeholder": "Enter the question for a detailed answer",
                        "required": true
                    }
                ],
                "categories": {
                    "general": {
                        "title": "General",
                        "slug": "general"
                    }
                }
            },
            "summary-bullets": {
                "title": "Summary Bullets",
                "templateSlug": "summary-bullets",
                "description": "Get a bulleted list of summary for a given topic with the same tone and context",
                "inputFields": [
                    {
                        "label": "Paragraph",
                        "name": "paragraph",
                        "sample": "The Greek gods were all born from the union between a god and a mortal woman. Zeus was born from the union between his father, Kronos, and his mother, Rhea. Athena was born from the union of Zeus with Metis, or wisdom. Apollo was born from the union with Leto or Artemis. Poseidon was born from the union his father, Uranus, and Gaia, or Earth. Demeter was born from the union her husband, Persephone, and Kore, or Spring.",
                        "placeholder": "Enter the paragraph for summarized list",
                        "required": true
                    }
                ],
                "categories": {
                    "general": {
                        "title": "General",
                        "slug": "general"
                    }
                }
            },
            "paragraph-for-heading": {
                "title": "Paragraph for Heading",
                "templateSlug": "paragraph-for-heading",
                "description": "Input the heading/title of your long-form content and receive an introductory paragraph",
                "inputFields": [
                    {
                        "label": "Title/Heading",
                        "name": "title/heading",
                        "sample": "French new wave as a film movement",
                        "placeholder": "Enter the title/heading",
                        "required": true
                    }
                ],
                "categories": {
                    "general": {
                        "title": "General",
                        "slug": "general"
                    }
                }
            },
            "listicle-ideas": {
                "title": "Listicle Ideas",
                "templateSlug": "listicle-ideas",
                "description": "Generate title ideas for listicles for your given topic and get ahead of your competition",
                "inputFields": [
                    {
                        "label": "Topic",
                        "name": "topic",
                        "sample": "preserving food",
                        "placeholder": "Enter the topic for listicle ideas",
                        "required": true
                    }
                ],
                "categories": {
                    "general": {
                        "title": "General",
                        "slug": "general"
                    }
                }
            },
            "outline": {
                "title": "Outline",
                "templateSlug": "outline",
                "description": "Create an outline of your long-form content based on a title and a brief description",
                "inputFields": [
                    {
                        "label": "Blog intro",
                        "name": "blogIntro",
                        "sample": "Nulled or cracked software might contain malware and viruses that infect your computer. These viruses steal your data and sometimes make your device invalid. So, it is highly recommended not to use a cracked version of the software. Besides security reasons, it's completely unethical and like theft. ",
                        "placeholder": "Enter a few lines of the intro to get an outline",
                        "required": true
                    }
                ],
                "categories": {
                    "general": {
                        "title": "General",
                        "slug": "general"
                    }
                }
            }
        },
        "licenseKeyLength": 46,
        "siteToken": "ST01-eyJjaXBoZXJ0ZXh0IjoiM3RDTE5XeXFiRG4wQlBZZTcxRlk2NjBmTlZ6RitsS29ndnV5UGxQNjE0VU9acGxGOW5xdDNLSXNuUkx3VjZXOEN3QmdleVBMVFwvTWRSdTF4dEM2ZzV1S0pRczBsYnVhallrdExLa1lmb0Z2dXhaQUgzdVZuU0dNcUpLM3R2ZlM3M3VzWmxVelhXbkd1eVFVTlRJeW9ob1MyQ0o3d3AzZEdZRjVsK2FOQjNRK1wvYTJnSncxZXlSQ0ptOXJvKzlGc2FCK3Nyem1yR1ExdUhLcm9CejRqaENRPT0iLCJpdiI6IjAxY2U0ZTQ0YjFmMmU2YzE5MjliYzkxMzk4ZjgwOWU4Iiwic2FsdCI6IjVhZGRkOTExODM2YTY5ZWE1OWIyZTAxNjI0NDY1NTc3IiwiaXRlcmF0aW9ucyI6OTk5fQ==",
        "authToken": "AT01-eyJjaXBoZXJ0ZXh0IjoiUTVkRkZyZUNaUkJCaVNCcEhHR29ubURscGhBZ01iOUo5YjZ6Tk1CS0lnYzhlVjBQRm9xdGZtNkRxMko1SmFmSXEweUZINDBDdmJweWZ0eFBLbzR5MkxrWlkzZG43aWFyeUI3XC81alQrZmlZY1hMK2V2cFdLNGhHd3VnVmNxdEpiajdRV2l2VHE2VmhyalhwNUZwUzFFUT09IiwiaXYiOiJlZmNjZGFlYzAzZTYxMzE2NjBhMDYyNTJlNGMxYmJjOSIsInNhbHQiOiIxNDBkZWIxODBhZTUwMzZjYjM1ZWMxZWNlZmNmMGZlMiIsIml0ZXJhdGlvbnMiOjk5OX0=",
        "authTokenLeaserApi": "https://geniewporg.test/wp-admin/admin-ajax.php?action=lease_auth_token",
        "wizardScreen": null,
        "wcActivated": true,
        "wizardScreenUrl": {
            "post": "https://geniewporg.test/wp-admin/post-new.php#getgenie-open-blogwizard",
            "woo_product": "https://geniewporg.test/wp-admin/post-new.php?post_type=product#getgenie-open-wooWizard"
        }
    },
    "blogWizardData": {
        "keyword": null,
        "seoEnabled": null,
        "selectedCountry": null,
        "titleCreativityLevel": null,
        "introCreativityLevel": null,
        "outlineCreativityLevel": null,
        "generatedTitles": null,
        "generatedIntros": null,
        "generatedOutlines": null,
        "selectedTitle": null,
        "selectedIntro": null,
        "selectedOutlines": null,
        "serpData": null,
        "keywordData": null
    },
    "Components": {
        "Common": {
            "ReduxManager": {},
            "RequestManager": {
                "EndPoints": {
                    "competitorData": "https://nlp.getgenie.ai/writer-wizard/serp-data",
                    "contentFeedback": "https://geniewporg.test/index.php?rest_route=/getgenie/v1/feedback/",
                    "continueWriting": "https://nlp.getgenie.ai/advanced-writing/continue-writing",
                    "countryList": "https://raw.githubusercontent.com/xs-salekin/data-store/main/countries.json",
                    "createHistoryUrl": "https://geniewporg.test/index.php?rest_route=/getgenie/v1/history/create",
                    "expandOutline": "https://nlp.getgenie.ai/advanced-writing/outline-expand",
                    "getLicenseToken": "https://geniewporg.test/index.php?rest_route=/getgenie/v1/license/get-token",
                    "historyData": "https://geniewporg.test/index.php?rest_route=/getgenie/v1/history/list",
                    "keywordsData": "https://nlp.getgenie.ai/writer-wizard/keyword-doctor",
                    "limitUsage": "https://geniewporg.test/index.php?rest_route=/getgenie/v1/limit_usage_stats/",
                    "outlines": "https://nlp.getgenie.ai/writer-wizard/generate-outline",
                    "removeLicenseToken": "https://geniewporg.test/index.php?rest_route=/getgenie/v1/license/remove-token",
                    "storeApiUrl": "https://geniewporg.test/index.php?rest_route=/getgenie/v1/store/false",
                    "userList": "https://raw.githubusercontent.com/xs-salekin/data-store/main/user_list.json",
                    "writeIntro": "https://nlp.getgenie.ai/writer-wizard/generate-intro",
                    "writeTemplates": "https://nlp.getgenie.ai/writer-default/generate-templates-content",
                    "writeTitle": "https://nlp.getgenie.ai/writer-wizard/generate-title"
                }
            },
            "Libs": {},
            "Utilities": {
                "GenieHelpers": {
                    "storeTimeout": {}
                }
            }
        },
        "Sidebar": {},
        "AdminPages": {
            "SettingsAdminPage": {}
        }
    }
}

window.getGenie.Components  = window.getGenie.Components ?? {};
