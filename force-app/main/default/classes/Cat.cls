public class Cat extends Mammal {
    public void meow(){
        System.debug('Cats meow..');
    } 
    
    override
        public void eat(){
    System.debug('Cats eat');
}
    Override
        public void drink(){
            System.debug('Cats drink');
        }
    override public void feedWithMilk(){
        System.debug('Cats feed their babies with milk..');
    }
}