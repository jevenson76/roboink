import React, { useState } from 'react';
import { X, Edit2 } from 'lucide-react';

interface CartItemProps {
  id: number;
  title: string;
  price: number;
  image: string;
  isCustom?: boolean;
  customText?: string;
  onUpdateCustomText?: (text: string) => void;
  onRemove: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ 
  title, 
  price, 
  image, 
  isCustom = false,
  customText = '',
  onUpdateCustomText,
  onRemove 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(customText);

  const handleSaveEdit = () => {
    if (onUpdateCustomText) {
      onUpdateCustomText(editText);
    }
    setIsEditing(false);
  };

  return (
    <div className="flex items-start space-x-4 p-4 bg-warm-brown/10 rounded-lg border border-brass-gold/30">
      <img 
        src={image} 
        alt={title}
        className="w-20 h-20 object-cover rounded-lg"
      />
      
      <div className="flex-1">
        <h4 className="font-bold text-creamy-ivory">{title}</h4>
        <p className="text-brass-gold font-semibold">${price.toFixed(2)}</p>
        
        {isCustom && (
          <div className="mt-2">
            {isEditing ? (
              <div className="space-y-2">
                <textarea
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="w-full p-2 bg-deep-navy/50 border border-brass-gold/50 rounded text-creamy-ivory text-sm resize-none h-20"
                  placeholder="Enter your custom design details..."
                />
                <div className="flex space-x-2">
                  <button
                    onClick={handleSaveEdit}
                    className="px-3 py-1 bg-brass-gold text-deep-navy rounded text-sm font-semibold hover:bg-copper transition-colors"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setEditText(customText);
                      setIsEditing(false);
                    }}
                    className="px-3 py-1 bg-warm-brown/30 text-creamy-ivory rounded text-sm hover:bg-warm-brown/50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-start space-x-2">
                <div className="flex-1">
                  <p className="text-sm text-creamy-ivory/70">Custom Design:</p>
                  <p className="text-sm text-creamy-ivory italic">
                    {customText || 'No custom text added yet'}
                  </p>
                </div>
                <button
                  onClick={() => setIsEditing(true)}
                  className="p-1 text-brass-gold hover:text-copper transition-colors"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      
      <button
        onClick={onRemove}
        className="p-1 text-creamy-ivory/50 hover:text-copper transition-colors"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

export default CartItem;