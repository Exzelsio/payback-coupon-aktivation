(function() {
    let timeout = 0;
    const couponCenter = document.querySelector('pb-coupon-center');

    if (couponCenter && couponCenter.shadowRoot) {
        const coupons = couponCenter.shadowRoot.querySelectorAll('pbc-coupon');
        coupons.forEach((coupon) => {
            const callToAction = coupon.shadowRoot.querySelector('pbc-coupon-call-to-action');
            if (callToAction && callToAction.shadowRoot) {
                const button = callToAction.shadowRoot.querySelector('button.not-activated');
                
                if (button) {
                    setTimeout(() => {
                        button.click();
                    }, 100 * timeout);
                    timeout += 1;
                }
            }
        });
    }
})();
