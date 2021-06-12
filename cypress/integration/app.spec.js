
describe('test_name', function() {


        it('My Testing', function() {
        let url = 'https://app-dev.kickscale.com/sign-in'
        cy.viewport(1920, 875)

        cy.intercept({ method: 'POST'})

        cy.request({
            url: url,
            //followRedirect: false, // turn off following redirects
        }).then((resp) => {
            // redirect status code is 302
            expect(resp.status).to.eq(200)
        })
        cy.url()
        //Web page visit
        cy.visit(url)
        //Workspace selection
        cy.get('.MuiList-root > .MuiButtonBase-root > .MuiListItemAvatar-root > .MuiAvatar-root > .MuiTypography-root').click()

        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        const test = new String(today.toLocaleDateString());
        const email = test.concat("githubactions@dummy.com")


        //Adding a new meeting
        cy.get('[data-testid="system-button-Add meeting-add"] > .MuiButton-label').click()

        cy.get('[data-testid="meeting-title-input-field"] > .MuiInputBase-input').type(email)

        //Checks that the correct value is added
        cy.get('[data-testid="meeting-title-input-field"] > .MuiInputBase-input').should('have.value', email)

        //Creates the meeting
        cy.get('#hallo > .MuiButton-label').click()
/*
        cy.request('https://app-dev.kickscale.com/sign-in')
        cy.get('[data-testid="Search-iconButton"]').click()
        cy.get('[data-test-id="Search"]').click()
        cy.get('[data-test-id="Search"]').type(email)

        let urls =[ 'https://europe-west1-kickscale-dev.cloudfunctions.net/getCalendarBusyTimesByTokenCallable',
                    'https://europe-west1-kickscale-dev.cloudfunctions.net/createCalendarEntry']
        var i;
        for( i = 0; i < 2; i++)
        {
            cy.request({
                method: 'POST',
                url: urls[i],
                //followRedirect: false, // turn off following redirects
                failOnStatusCode: false,
                response: {
                    message: 'Something went wrong, please try again later',
                },
            }).then((response) => {
                // redirect status code is 200ms
                // expect(response.status).to.eq(200)
                expect(response).to.have.property('headers')
                //cy.log(response.body).debug()
                expect(response.headers).to.have.property('vary', 'Origin')

                expect(response).to.have.property('status', 400)
                const temp = response.headers['date']
                let output = ['https://europe-west1-kickscale-dev.cloudfunctions.net/getCalendarBusyTimesByTokenCallable', response.status];
                output.join();
                //cy.writeFile('home/home/Desktop/Web_Testing/output.txt', temp)

                i != 0 ? cy.writeFile('/home/home/Desktop/Web_Testing/info.txt','z ', { flag: 'a+'}):
                cy.writeFile('/home/home/Desktop/Web_Testing/info.txt',"Url, Status Code", { flag: 'a+'});

                cy.writeFile('/home/home/Desktop/Web_Testing/info.txt',output, { flag: 'a+'})
            })
        }*/
    })
  })
